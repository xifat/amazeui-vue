module.exports = {
  "/": {
    component: require('./views/index.vue')
  },
  "/article": {
    component: {
      template: '<articles></articles>',
      components: {
        "articles": function(resolve) {
          require(['views/articles.vue'], resolve)
        }
      }
    }
  },
  "/buttons": {
    component: {
      template: '<buttons></buttons>',
      components: {
        "buttons": function(resolve) {
          require(['views/buttons.vue'], resolve)
        }
      }
    }
  },
  "/forms": {
    component: {
      template: '<forms></forms>',
      components: {
        "forms": function(resolve) {
          require(['views/forms.vue'], resolve)
        }
      }
    }
  },
  "/list": {
    component: {
      template: '<lists></lists>',
      components: {
        "lists": function(resolve) {
          require(['views/lists.vue'], resolve)
        }
      }
    }
  },
  "/panels": {
    component: {
      template: '<panels></panels>',
      components: {
        "panels": function(resolve) {
          require(['views/panels.vue'], resolve)
        }
      }
    }
  },
  "/modals": {
    component: {
      template: '<modals></modals>',
      components: {
        "modals": function(resolve) {
          require(['views/modals.vue'], resolve)
        }
      }
    }
  },
  "/paginations": {
    component: {
      template: '<paginations></paginations>',
      components: {
        "paginations": function(resolve) {
          require(['views/paginations.vue'], resolve)
        }
      }
    }
  },
  "/breadcrumb": {
    component: {
      template: '<breadcrumb></breadcrumb>',
      components: {
        "breadcrumb": function(resolve) {
          require(['views/breadcrumb.vue'], resolve)
        }
      }
    }
  }
};