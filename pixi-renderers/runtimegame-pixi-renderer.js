var gdjs;
(function (l) {
  const d = new l.Logger("PIXI game renderer"),
    g = [37, 38, 39, 40],
    c = new Map(),
    p = !!(
      typeof navigator != "undefined" &&
      navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)
    );

  class w {
    constructor(e, n) {
      this._isFullPage = !0;
      this._isFullscreen = !1;
      this._pointerLockReasons = new Set();
      this._pixiRenderer = null;
      this._threeRenderer = null;
      this._gameCanvas = null;
      this._domElementsContainer = null;
      this._canvasWidth = 0;
      this._canvasHeight = 0;
      this._keepRatio = !0;
      this._nextFrameId = 0;
      this._wasDisposed = !1;
      this.getElectronRemote = () => {
        if (typeof require == "function") {
          const e = this._game.getAdditionalOptions(),
            n =
              e && e.electronRemoteRequirePath
                ? e.electronRemoteRequirePath
                : "@electron/remote";
          try {
            return require(n);
          } catch (i) {
            console.error(
              `Could not load @electron/remote from "${n}". Error is:`,
              i
            );
          }
        }
        return null;
      };
      this._game = e;
      this._forceFullscreen = n;
      this._marginLeft = this._marginTop = this._marginRight = this._marginBottom = 0;
      this._setupOrientation();
    }

    createStandardCanvas(e) {
      this._throwIfDisposed();
      const n = document.createElement("canvas");
      e.appendChild(n);
      this.initializeRenderers(n);
      this.initializeCanvas(n);
    }

    initializeRenderers(e) {
      this._throwIfDisposed();
      if (typeof THREE != "undefined") {
        this._threeRenderer = new THREE.WebGLRenderer({
          canvas: e,
          antialias:
            this._game.getAntialiasingMode() !== "none" &&
            (this._game.isAntialisingEnabledOnMobile() ||
              !l.evtTools.common.isMobile()),
          preserveDrawingBuffer: !0,
        });
        this._threeRenderer.shadowMap.enabled = !0;
        this._threeRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this._threeRenderer.useLegacyLights = !0;
        this._threeRenderer.autoClear = !1;
        this._threeRenderer.pixelRatio = window.devicePixelRatio;
        this._threeRenderer.setSize(
          this._game.getGameResolutionWidth(),
          this._game.getGameResolutionHeight()
        );
        this._pixiRenderer = new PIXI.Renderer({
          width: this._game.getGameResolutionWidth(),
          height: this._game.getGameResolutionHeight(),
          view: e,
          context: this._threeRenderer.getContext(),
          clearBeforeRender: !1,
          preserveDrawingBuffer: !0,
          antialias: !1,
          backgroundAlpha: 0,
        });
      } else {
        this._pixiRenderer = PIXI.autoDetectRenderer({
          width: this._game.getGameResolutionWidth(),
          height: this._game.getGameResolutionHeight(),
          view: e,
          preserveDrawingBuffer: !0,
          antialias: !1,
        });
      }

      this._pixiRenderer.plugins.accessibility.destroy();
      delete this._pixiRenderer.plugins.accessibility;
    }

    initializeCanvas(e) {
      this._gameCanvas = e;
      e.style.position = "absolute";
      e.tabIndex = 1;
      e.style.userSelect = "none";
      e.style.outline = "none";

      const n = document.createElement("div");
      n.style.position = "absolute";
      n.style.overflow = "hidden";
      n.style.outline = "none";
      n.style.pointerEvents = "none";
      n.addEventListener("scroll", (i) => {
        n.scrollLeft = 0;
        n.scrollTop = 0;
        i.preventDefault();
      });
      e.addEventListener("pointerdown", () => {
        e.focus();
      });
      n.style["-webkit-user-select"] = "none";
      e.parentNode?.appendChild(n);
      this._domElementsContainer = n;

      this._resizeCanvas();

      if (this._game.getScaleMode() === "nearest") {
        e.style["image-rendering"] = "-moz-crisp-edges";
        e.style["image-rendering"] = "-webkit-optimize-contrast";
        e.style["image-rendering"] = "-webkit-crisp-edges";
        e.style["image-rendering"] = "pixelated";
      }

      if (this._game.getPixelsRounding()) {
        PIXI.settings.ROUND_PIXELS = !0;
      }

      window.addEventListener("resize", () => {
        this._game.onWindowInnerSizeChanged();
        this._resizeCanvas();
      });

      e.focus();
    }

    static getWindowInnerWidth() {
      return typeof window != "undefined" ? window.innerWidth : 800;
    }

    static getWindowInnerHeight() {
      return typeof window != "undefined" ? window.innerHeight : 800;
    }

    updateRendererSize() {
      this._resizeCanvas();
    }

    _setupOrientation() {
      if (
        typeof window == "undefined" ||
        !window.screen ||
        !window.screen.orientation
      )
        return;
      const e = this._game.getGameData().properties.orientation;
      try {
        if (e === "default") {
          const n = window.screen.orientation.unlock();
          n && n.catch(() => {});
        } else {
          window.screen.orientation.lock(e).catch(() => {});
        }
      } catch (n) {
        d.error("Unexpected error while setting up orientation: ", n);
      }
    }

    _resizeCanvas() {
      if (!this._pixiRenderer || !this._domElementsContainer) return;

      if (
        this._pixiRenderer.width !== this._game.getGameResolutionWidth() ||
        this._pixiRenderer.height !== this._game.getGameResolutionHeight()
      ) {
        this._pixiRenderer.resize(
          this._game.getGameResolutionWidth(),
          this._game.getGameResolutionHeight()
        );
        if (this._threeRenderer) {
          this._threeRenderer.setSize(
            this._game.getGameResolutionWidth(),
            this._game.getGameResolutionHeight()
          );
        }
      }

      const e = this._forceFullscreen || this._isFullPage || this._isFullscreen;
      let n = this._game.getGameResolutionWidth();
      let i = this._game.getGameResolutionHeight();
      let o = window.innerWidth - this._marginLeft - this._marginRight;
      let a = window.innerHeight - this._marginTop - this._marginBottom;

      if (o < 0) o = 0;
      if (a < 0) a = 0;

      if (!e) {
        if (this._gameCanvas) {
          this._gameCanvas.style.top = this._marginTop + "px";
          this._gameCanvas.style.left = this._marginLeft + "px";
          this._gameCanvas.style.width = n + "px";
          this._gameCanvas.style.height = i + "px";
          this._gameCanvas.style.transform = "none";
          this._gameCanvas.style.transformOrigin = "center center";
        }

        this._domElementsContainer.style.top = this._marginTop + "px";
        this._domElementsContainer.style.left = this._marginLeft + "px";
        this._domElementsContainer.style.width = n + "px";
        this._domElementsContainer.style.height = i + "px";
        this._domElementsContainer.style.transform = "none";

        this._canvasWidth = n;
        this._canvasHeight = i;
        return;
      }

      const h = a > o;

      let f = 0;
      let t = 0;
      let s = 0;
      let r = 0;

      if (!h) {
        let u = n;
        let m = i;

        if (!this._keepRatio) {
          u = o;
          m = a;
        } else if ((e && this._keepRatio) || u > o || m > a) {
          let R = o / u;
          if (m * R > a) R = a / m;
          u *= R;
          m *= R;
        }

        f = this._marginLeft + (o - u) / 2;
        t = this._marginTop + (a - m) / 2;
        s = u;
        r = m;

        if (this._gameCanvas) {
          this._gameCanvas.style.top = t + "px";
          this._gameCanvas.style.left = f + "px";
          this._gameCanvas.style.width = s + "px";
          this._gameCanvas.style.height = r + "px";
          this._gameCanvas.style.transform = "none";
          this._gameCanvas.style.transformOrigin = "center center";
        }

        this._domElementsContainer.style.top = t + "px";
        this._domElementsContainer.style.left = f + "px";
        this._domElementsContainer.style.width = s + "px";
        this._domElementsContainer.style.height = r + "px";
        this._domElementsContainer.style.transform = "none";

        this._canvasWidth = s;
        this._canvasHeight = r;
        return;
      }

      let u = n;
      let m = i;

      if (!this._keepRatio) {
        u = a;
        m = o;
      } else {
        let R = a / n;
        if (i * R > o) R = o / i;
        u = n * R;
        m = i * R;
      }

      const R = u;
      const M = m;
      const C = M;
      const P = R;

      f = this._marginLeft + (o - C) / 2;
      t = this._marginTop + (a - P) / 2;
      s = C;
      r = P;

      if (this._gameCanvas) {
        this._gameCanvas.style.left = f + "px";
        this._gameCanvas.style.top = t + P + "px";
        this._gameCanvas.style.width = R + "px";
        this._gameCanvas.style.height = M + "px";
        this._gameCanvas.style.transform = "rotate(-90deg)";
        this._gameCanvas.style.transformOrigin = "top left";
      }

      this._domElementsContainer.style.top = t + "px";
      this._domElementsContainer.style.left = f + "px";
      this._domElementsContainer.style.width = s + "px";
      this._domElementsContainer.style.height = r + "px";
      this._domElementsContainer.style.transform = "none";

      this._canvasWidth = s;
      this._canvasHeight = r;
    }

    keepAspectRatio(e) {
      if (this._keepRatio !== e) {
        this._keepRatio = e;
        this._resizeCanvas();
      }
    }

    setMargins(e, n, i, o) {
      this._throwIfDisposed();
      if (
        this._marginTop === e &&
        this._marginRight === n &&
        this._marginBottom === i &&
        this._marginLeft === o
      )
        return;

      this._marginTop = e;
      this._marginRight = n;
      this._marginBottom = i;
      this._marginLeft = o;
      this._resizeCanvas();
    }

    setWindowSize(e, n) {
      this._throwIfDisposed();
      const i = this.getElectronRemote();
      if (i) {
        const o = i.getCurrentWindow();
        try {
          o && o.setContentSize(e, n);
        } catch (a) {
          d.error(
            `Window size setting to width ${e} and height ${n} failed. See error:`,
            a
          );
        }
      } else {
        d.warn("Window size can't be changed on this platform.");
      }
    }

    centerWindow() {
      this._throwIfDisposed();
      const e = this.getElectronRemote();
      if (e) {
        const n = e.getCurrentWindow();
        try {
          n && n.center();
        } catch (i) {
          d.error("Window centering failed. See error:", i);
        }
      } else {
        d.warn("Window can't be centered on this platform.");
      }
    }

    setFullScreen(e) {
      if (this._throwIfDisposed(), this._forceFullscreen || this._isFullscreen === e)
        return;

      this._isFullscreen = !!e;
      const n = this.getElectronRemote();

      if (n) {
        const i = n.getCurrentWindow();
        try {
          i && i.setFullScreen(this._isFullscreen);
        } catch (o) {
          d.error(
            `Full screen setting to ${this._isFullscreen} failed. See error:`,
            o
          );
        }
      } else {
        if (this._isFullscreen) {
          document.documentElement.requestFullscreen
            ? document.documentElement.requestFullscreen()
            : document.documentElement.mozRequestFullScreen
            ? document.documentElement.mozRequestFullScreen()
            : document.documentElement.webkitRequestFullScreen &&
              document.documentElement.webkitRequestFullScreen();
        } else {
          document.exitFullscreen
            ? document.exitFullscreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.webkitCancelFullScreen &&
              document.webkitCancelFullScreen();
        }
      }

      this._resizeCanvas();
    }

    isFullScreen() {
      const e = this.getElectronRemote();
      if (e) {
        try {
          return e.getCurrentWindow().isFullScreen();
        } catch (n) {
          d.error("Full screen detection failed. See error:", n);
          return !1;
        }
      }
      return this._isFullscreen || window.screen.height === window.innerHeight;
    }

    requestPointerLock(e) {
      if (!this._gameCanvas || this._pointerLockReasons.has(e)) return !1;
      this._pointerLockReasons.add(e);
      try {
        this._gameCanvas.requestPointerLock();
        return !0;
      } catch (n) {
        d.error("Failed to request pointer lock:", n);
        return !1;
      }
    }

    exitPointerLock(e) {
      this._pointerLockReasons.delete(e);
      if (document.pointerLockElement && this._pointerLockReasons.size === 0) {
        document.exitPointerLock();
      }
    }

    isPointerLocked() {
      return document.pointerLockElement === this._gameCanvas;
    }

    convertCanvasToDomElementContainerCoords(e, n) {
      const i = n || [0, 0];
      i[0] = (e[0] * this._canvasWidth) / this._game.getGameResolutionWidth();
      i[1] = (e[1] * this._canvasHeight) / this._game.getGameResolutionHeight();
      return i;
    }

    getCanvasToDomElementContainerHeightScale() {
      return (this._canvasHeight || 1) / this._game.getGameResolutionHeight();
    }

    convertPageToGameCoords(e, n) {
      const i = this._gameCanvas;
      if (!i) return [0, 0];

      const o = window.innerWidth - this._marginLeft - this._marginRight;
      const a = window.innerHeight - this._marginTop - this._marginBottom;
      const h = a > o;

      if (!h) {
        const f = [e - i.offsetLeft, n - i.offsetTop];
        f[0] *= this._game.getGameResolutionWidth() / (this._canvasWidth || 1);
        f[1] *= this._game.getGameResolutionHeight() / (this._canvasHeight || 1);
        return f;
      }

      const f = i.getBoundingClientRect();
      const t = e - f.left;
      const s = n - f.top;
      const r = f.width || 1;
      const u = f.height || 1;

      let m = t / r;
      let R = s / u;

      if (m < 0) m = 0;
      if (m > 1) m = 1;
      if (R < 0) R = 0;
      if (R > 1) R = 1;

      return [
        R * this._game.getGameResolutionWidth(),
        (1 - m) * this._game.getGameResolutionHeight(),
      ];
    }

    bindStandardEvents(e, n, i) {
      this._throwIfDisposed();
      const o = this._gameCanvas;
      if (!o) return;

      const a = (t) => {
        const s = t.pageX - o.offsetLeft,
          r = t.pageY - o.offsetTop;
        return (
          0 <= s &&
          s < (this._canvasWidth || 1) &&
          0 <= r &&
          r < (this._canvasHeight || 1)
        );
      };

      (function () {
        isNaN(o.offsetLeft) && ((o.offsetLeft = 0), (o.offsetTop = 0));
        isNaN(i.body.scrollLeft) &&
          ((i.body.scrollLeft = 0), (i.body.scrollTop = 0));
        (i.documentElement === void 0 || i.documentElement === null) &&
          (i.documentElement = {});
        isNaN(i.documentElement.scrollLeft) &&
          ((i.documentElement.scrollLeft = 0),
          (i.documentElement.scrollTop = 0));
        isNaN(o.offsetLeft) && ((o.offsetLeft = 0), (o.offsetTop = 0));
      })();

      const h = () =>
        !(
          i.activeElement === o ||
          i.activeElement === i.body ||
          i.activeElement === null
        );
      const f = (t) => !(t.target === o || t.target === i.body);

      i.onkeydown = (t) => {
        if (h()) return;
        if (p && t.code !== "MetaLeft" && t.code !== "MetaRight") {
          t.metaKey
            ? c.set(t.code, { keyCode: t.keyCode, location: t.location })
            : c.delete(t.code);
        }
        g.includes(t.keyCode) && t.preventDefault();
        this._game.isInGameEdition() && t.preventDefault();
        !t.repeat && e.onKeyPressed(t.keyCode, t.location);
      };

      i.onkeyup = (t) => {
        if (h()) return;

        if (p && (t.code === "MetaLeft" || t.code === "MetaRight")) {
          for (const { location: s, keyCode: r } of c.values()) {
            e.onKeyReleased(r, s);
          }
          c.clear();
        }

        this._game.isInGameEdition() && t.preventDefault();
        g.includes(t.keyCode) && t.preventDefault();
        e.onKeyReleased(t.keyCode, t.location);
      };

      function _(t) {
        switch (t) {
          case 1:
            return l.InputManager.MOUSE_MIDDLE_BUTTON;
          case 2:
            return l.InputManager.MOUSE_RIGHT_BUTTON;
        }
        return t;
      }

      o.onmousemove = (t) => {
        const s = this.convertPageToGameCoords(t.pageX, t.pageY);
        e.onMouseMove(s[0], s[1], {
          movementX: t.movementX,
          movementY: t.movementY,
        });
      };

      o.onmousedown = (t) => {
        const s = this.convertPageToGameCoords(t.pageX, t.pageY);
        e.onMouseMove(s[0], s[1]);
        e.onMouseButtonPressed(_(t.button));
        n.focus !== void 0 && n.focus();
        return !1;
      };

      o.onmouseup = function (t) {
        e.onMouseButtonReleased(_(t.button));
        return !1;
      };

      o.onmouseleave = function () {
        e.onMouseLeave();
      };

      o.onmouseenter = function (t) {
        e.onMouseEnter();
        const s = [
          l.InputManager.MOUSE_LEFT_BUTTON,
          l.InputManager.MOUSE_RIGHT_BUTTON,
          l.InputManager.MOUSE_MIDDLE_BUTTON,
          l.InputManager.MOUSE_BACK_BUTTON,
          l.InputManager.MOUSE_FORWARD_BUTTON,
        ];
        for (let r = 0, u = s.length; r < u; ++r) {
          const m = s[r],
            R = (t.buttons & (1 << r)) != 0,
            v = e.isMouseButtonPressed(m);
          R && !v
            ? e.onMouseButtonPressed(m)
            : !R && v && e.onMouseButtonReleased(m);
        }
      };

      n.addEventListener(
        "click",
        function () {
          n.focus !== void 0 && n.focus();
          return !1;
        },
        !1
      );

      o.oncontextmenu = function (t) {
        t.preventDefault();
        t.stopPropagation();
        return !1;
      };

      o.onwheel = function (t) {
        e.onMouseWheel(-t.deltaY, t.deltaX, t.deltaZ);
      };

      n.addEventListener(
        "touchmove",
        (t) => {
          if (f(t)) return;
          t.preventDefault();

          if (t.changedTouches) {
            for (let s = 0; s < t.changedTouches.length; ++s) {
              const r = t.changedTouches[s],
                u = this.convertPageToGameCoords(r.pageX, r.pageY);
              e.onTouchMove(r.identifier, u[0], u[1]);
              e.onTouchMove(r.identifier, u[0], u[1]);
              if (e.isSimulatingMouseWithTouch()) {
                a(r) ? e.onMouseEnter() : e.onMouseLeave();
              }
            }
          }
        },
        { passive: !1 }
      );

      n.addEventListener(
        "touchstart",
        (t) => {
          if (f(t)) return;
          t.preventDefault();

          if (t.changedTouches) {
            for (let s = 0; s < t.changedTouches.length; ++s) {
              const r = t.changedTouches[s],
                u = this.convertPageToGameCoords(r.pageX, r.pageY);
              e.onTouchStart(t.changedTouches[s].identifier, u[0], u[1]);
            }
          }
          return !1;
        },
        { passive: !1 }
      );

      n.addEventListener(
        "touchend",
        function (t) {
          if (f(t)) return;
          t.preventDefault();

          if (t.changedTouches) {
            for (let s = 0; s < t.changedTouches.length; ++s) {
              e.onTouchEnd(t.changedTouches[s].identifier);
            }
          }
          return !1;
        },
        { passive: !1 }
      );

      n.addEventListener(
        "touchcancel",
        function (t) {
          if (f(t)) return;
          t.preventDefault();

          if (t.changedTouches) {
            for (let s = 0; s < t.changedTouches.length; ++s) {
              e.onTouchCancel(t.changedTouches[s].identifier);
            }
          }
          return !1;
        },
        { passive: !1 }
      );
    }

    setWindowTitle(e) {
      typeof document != "undefined" && (document.title = e);
    }

    getWindowTitle() {
      return typeof document != "undefined" ? document.title : "";
    }

    startGameLoop(e) {
      this._throwIfDisposed();
      let n = 0;
      const i = (o) => {
        this._nextFrameId = requestAnimationFrame(i);
        const a = n ? o - n : 0;
        n = o;
        e(a) || cancelAnimationFrame(this._nextFrameId);
      };
      requestAnimationFrame(i);
    }

    stopGameLoop() {
      cancelAnimationFrame(this._nextFrameId);
    }

    getPIXIRenderer() {
      return this._pixiRenderer;
    }

    getThreeRenderer() {
      return this._threeRenderer;
    }

    getDomElementContainer() {
      return this._domElementsContainer;
    }

    openURL(e) {
      if (typeof window != "undefined") {
        const n = this.getElectron();
        n
          ? n.shell.openExternal(e)
          : typeof window.cordova != "undefined" &&
            typeof window.cordova.InAppBrowser != "undefined"
          ? window.cordova.InAppBrowser.open(e, "_system", "location=yes")
          : window.open(e, "_blank");
      }
    }

    stopGame() {
      const e = this.getElectronRemote();
      if (e) {
        const n = e.getCurrentWindow();
        if (n) {
          try {
            n.close();
          } catch (i) {
            d.error("Window closing failed. See error:", i);
          }
        }
      } else if (
        typeof navigator != "undefined" &&
        navigator.app &&
        navigator.app.exitApp
      ) {
        navigator.app.exitApp();
      }
    }

    dispose(e) {
      this._pixiRenderer?.destroy();
      this._threeRenderer?.dispose();
      this._pixiRenderer = null;
      this._threeRenderer = null;

      if (e && this._gameCanvas) {
        this._gameCanvas.parentNode?.removeChild(this._gameCanvas);
      }
      this._gameCanvas = null;

      this._domElementsContainer?.parentNode?.removeChild(
        this._domElementsContainer
      );
      this._domElementsContainer = null;
      this._wasDisposed = !0;
    }

    getCanvas() {
      return this._gameCanvas;
    }

    isWebGLSupported() {
      return (
        !!this._pixiRenderer &&
        this._pixiRenderer.type === PIXI.RENDERER_TYPE.WEBGL
      );
    }

    getElectron() {
      return typeof require == "function" ? require("electron") : null;
    }

    getGame() {
      return this._game;
    }

    _throwIfDisposed() {
      if (this._wasDisposed)
        throw "The RuntimeGameRenderer has been disposed and should not be used anymore.";
    }
  }

  l.RuntimeGamePixiRenderer = w;
  l.RuntimeGameRenderer = w;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=runtimegame-pixi-renderer.js.map