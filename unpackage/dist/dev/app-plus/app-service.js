if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(shared, vue) {
  "use strict";
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (shared.toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = shared.toTypeString(v).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = shared.toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  var _imports_0 = "/static/logo.png";
  var _imports_1 = "/static/iconlist/icon-news.png";
  var _imports_2 = "/static/iconlist/icon-groupbuy.png";
  var _imports_3 = "/static/iconlist/icon-friend.png";
  var _imports_4 = "/static/iconlist/icon-carimg.png";
  var _imports_5 = "/static/iconlist/icon-dealer.png";
  var _imports_6 = "/static/iconlist/icon-esc.png";
  var _imports_7 = "/static/iconlist/icon-find.png";
  var _imports_8 = "/static/iconlist/icon-sc.png";
  var _imports_9 = "/static/iconlist/icon-user.png";
  var _imports_10 = "/static/images/201811271113441157.jpg";
  var _imports_11 = "/static/images/201811271115199738.jpg";
  var _imports_12 = "/static/images/201811280333301986.jpg";
  var _imports_13 = "/static/images/202003051251314458.jpg";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$2 = {
    setup() {
    },
    data() {
      return {
        imagelist: []
      };
    },
    methods: {
      getinfo: async function() {
        const { proxy } = vue.getCurrentInstance();
        const res = await proxy.$myRequest({
          url: "/Service/ExpressAutoApi/NewsAPI.ashx",
          method: "POST",
          header: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          data: { "method": "LoadNewestNewsListForIndex", "page": "1", "pagesize": "8", "catgegoryid": "0" }
        });
        const _imagelist = new Array();
        if (res.data) {
          res.data.forEach(function(element) {
            _imagelist.unshift(element.NewsCover);
            formatAppLog("log", "at pages/index/index.vue:111", element.NewsCover);
          });
        }
        this.imagelist = _imagelist;
      }
    },
    onLoad() {
      this.imagelist = [
        "/static/swipeimg/202104140610486690.png",
        "/static/swipeimg/202104140612122136.png",
        "/static/swipeimg/202104140612445573.png",
        "/static/swipeimg/202104140613319695.png"
      ];
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createCommentVNode("\u5934\u90E8\u56FE\u6807"),
      vue.createElementVNode("view", { class: "head" }, [
        vue.createElementVNode("view", { class: "logo" }, [
          vue.createElementVNode("image", {
            src: _imports_0,
            mode: ""
          })
        ])
      ]),
      vue.createCommentVNode("\u8F6E\u64AD\u56FE"),
      vue.createElementVNode("view", { class: "lunbo" }, [
        vue.createElementVNode("swiper", {
          "indicator-dots": true,
          autoplay: true,
          interval: 3e3,
          duration: 1e3
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.imagelist, (item) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
              vue.createElementVNode("image", {
                src: item,
                class: "slide-image",
                mode: "widthFix"
              }, null, 8, ["src"])
            ]);
          }), 256))
        ])
      ]),
      vue.createCommentVNode("icon\u5217\u8868"),
      vue.createElementVNode("view", { class: "nav" }, [
        vue.createElementVNode("view", { class: "nav_item" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              src: _imports_1,
              alt: ""
            })
          ]),
          vue.createElementVNode("text", null, "\u65B0\u95FB")
        ]),
        vue.createElementVNode("view", { class: "nav_item" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              src: _imports_2,
              alt: ""
            })
          ]),
          vue.createElementVNode("text", null, "\u56E2\u8D2D")
        ]),
        vue.createElementVNode("view", { class: "nav_item" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              src: _imports_3,
              alt: ""
            })
          ]),
          vue.createElementVNode("text", null, "\u8F66\u5C55")
        ]),
        vue.createElementVNode("view", { class: "nav_item" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              src: _imports_4,
              alt: ""
            })
          ]),
          vue.createElementVNode("text", null, "\u7ECF\u9500\u5546")
        ]),
        vue.createElementVNode("view", { class: "nav_item" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              src: _imports_5,
              alt: ""
            })
          ]),
          vue.createElementVNode("text", null, "\u56FE\u5E93")
        ]),
        vue.createElementVNode("view", { class: "nav_item" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              src: _imports_6,
              alt: ""
            })
          ]),
          vue.createElementVNode("text", null, "\u627E\u8F66")
        ]),
        vue.createElementVNode("view", { class: "nav_item" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              src: _imports_7,
              alt: ""
            })
          ]),
          vue.createElementVNode("text", null, "\u4E8C\u624B\u8F66")
        ]),
        vue.createElementVNode("view", { class: "nav_item" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              src: _imports_8,
              alt: ""
            })
          ]),
          vue.createElementVNode("text", null, "\u641C\u7D22")
        ]),
        vue.createElementVNode("view", { class: "nav_item" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              src: _imports_9,
              alt: ""
            })
          ]),
          vue.createElementVNode("text", null, "\u4E2A\u4EBA\u4E2D\u5FC3")
        ])
      ]),
      vue.createCommentVNode("\u70ED\u95E8\u63A8\u8350"),
      vue.createElementVNode("view", { class: "hot-remmend" }, [
        vue.createElementVNode("view", { class: "share_title" }, [
          vue.createElementVNode("h4", null, "\u70ED\u95E8\u56E2\u8D2D\u63A8\u8350"),
          vue.createElementVNode("a", {
            href: "http://",
            target: "_blank",
            rel: "noopener noreferrer"
          }, "\u66F4\u591A")
        ]),
        vue.createElementVNode("view", { class: "navlist" }, [
          vue.createElementVNode("view", { class: "nav_item" }, [
            vue.createElementVNode("view", { class: "nav_itemc" }, [
              vue.createElementVNode("image", {
                src: _imports_10,
                alt: ""
              })
            ]),
            vue.createElementVNode("text", null, "\u5317\u6C7D\u96C6\u56E2"),
            vue.createElementVNode("text", null, "167\u4EBA\u62A5\u540D")
          ]),
          vue.createElementVNode("view", { class: "nav_item" }, [
            vue.createElementVNode("view", { class: "nav_item" }, [
              vue.createElementVNode("image", {
                src: _imports_11,
                alt: ""
              })
            ]),
            vue.createElementVNode("text", null, "\u5317\u6C7D\u96C6\u56E2"),
            vue.createElementVNode("text", null, "167\u4EBA\u62A5\u540D")
          ]),
          vue.createElementVNode("view", { class: "nav_item" }, [
            vue.createElementVNode("view", { class: "nav_item" }, [
              vue.createElementVNode("image", {
                src: _imports_12,
                alt: ""
              })
            ]),
            vue.createElementVNode("text", null, "\u5317\u6C7D\u96C6\u56E2"),
            vue.createElementVNode("text", null, "167\u4EBA\u62A5\u540D")
          ]),
          vue.createElementVNode("view", { class: "nav_item" }, [
            vue.createElementVNode("view", { class: "nav_item" }, [
              vue.createElementVNode("image", {
                src: _imports_13,
                alt: ""
              })
            ]),
            vue.createElementVNode("text", null, "\u5317\u6C7D\u96C6\u56E2"),
            vue.createElementVNode("text", null, "167\u4EBA\u62A5\u540D")
          ])
        ])
      ])
    ], 64);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "C:/Users/41427/Documents/HBuilderProjects/testdemo/pages/index/index.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  var PagesNewsNews = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/Users/41427/Documents/HBuilderProjects/testdemo/pages/news/news.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/news/news", PagesNewsNews);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/41427/Documents/HBuilderProjects/testdemo/App.vue"]]);
  const myRequest = (option) => {
    return new Promise((resolve, reject) => {
      uni.request({
        url: option.url,
        method: option.method || "GET",
        header: option.header,
        data: option.data || {},
        success: function(res) {
          if (res.data.status !== 0) {
            resolve(res);
          } else {
            return uni.showToast({
              title: "\u6570\u636E\u83B7\u53D6\u5931\u8D25"
            });
          }
        },
        fail: function(err) {
          return uni.showToast({
            title: "\u6570\u636E\u83B7\u53D6\u5931\u8D25"
          });
        }
      });
    });
  };
  function createApp() {
    const app = vue.createVueApp(App);
    app.config.globalProperties.$myRequest = myRequest;
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(uni.VueShared, Vue);
