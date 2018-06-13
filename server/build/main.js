require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


// const dbname = process.env.NODE_ENV === 'test' ? 'koatest' : 'koa'

/* harmony default export */ __webpack_exports__["a"] = ({
  app: {
    name: 'something',
    version: '1.0.0'
  },
  database: {
    driver: 'mongo',
    host: 'ds113849.mlab.com',
    port: 13849,
    dbname: 'yellow-bike',
    username: 'server',
    password: 'fT9MqtLn',
    options: {}
  },
  server: {
    port: 3030
  },
  static_dir: {
    root: './static',
    options: {}
  },
  session: {
    secretKey: 'yelBik'
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },

  picture: String,
  description: String
}));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mainSchema__ = __webpack_require__(2);



var beverageSchema = __WEBPACK_IMPORTED_MODULE_1__mainSchema__["a" /* default */];

var beverage = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('beverage', beverageSchema);

/* harmony default export */ __webpack_exports__["a"] = (beverage);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mainSchema__ = __webpack_require__(2);



var fCourseSchema = __WEBPACK_IMPORTED_MODULE_1__mainSchema__["a" /* default */];

var fCourse = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('firstCourse', fCourseSchema);

/* harmony default export */ __webpack_exports__["a"] = (fCourse);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mainSchema__ = __webpack_require__(2);



var sCourseSchema = __WEBPACK_IMPORTED_MODULE_1__mainSchema__["a" /* default */];

var sCourse = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('secondCourse', sCourseSchema);

/* harmony default export */ __webpack_exports__["a"] = (sCourse);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db_index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middleware_index__ = __webpack_require__(11);




 // хз где еще вызвать


var app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
var host = process.env.HOST;
var port = process.env.PORT || __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].server.port;

Object(__WEBPACK_IMPORTED_MODULE_3__middleware_index__["a" /* default */])(app);

app.listen(port, host);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_beverage__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_fCourse__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_sCourse__ = __webpack_require__(6);







var _config$database = __WEBPACK_IMPORTED_MODULE_1__config_index__["a" /* default */].database,
    username = _config$database.username,
    password = _config$database.password,
    host = _config$database.host,
    port = _config$database.port,
    dbname = _config$database.dbname;


__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect('mongodb://' + username + ':' + password + '@' + host + ':' + port + '/' + dbname);

__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Promise = Promise;

var fakeDB = [{
    name: "Напитки",
    value: [{ name: "чай", price: "40руб" }, { name: "кофе", price: "60руб" }]
}, {
    name: "Горячее",
    value: [{ name: "Плов", price: "120руб" }, { name: "Шашлык", price: "200руб" }]
}];

var products = fakeDB;

/* unused harmony default export */ var _unused_webpack_default_export = ({
    beverage: __WEBPACK_IMPORTED_MODULE_2__models_beverage__["a" /* default */],
    fCourse: __WEBPACK_IMPORTED_MODULE_3__models_fCourse__["a" /* default */],
    sCourse: __WEBPACK_IMPORTED_MODULE_4__models_sCourse__["a" /* default */]
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_static__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_bodyparser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_index__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_kcors__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_kcors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_kcors__);









//const routes = router.routes;

/* harmony default export */ __webpack_exports__["a"] = (function (app) {

  app.use(__WEBPACK_IMPORTED_MODULE_4__error__["a" /* default */]);

  app.use(__WEBPACK_IMPORTED_MODULE_0_koa_static___default()(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].static_dir.root));

  app.use(__WEBPACK_IMPORTED_MODULE_1_koa_bodyparser___default()());

  app.use(__WEBPACK_IMPORTED_MODULE_5_kcors___default()({
    origin: 'http://localhost:3000',
    credentials: false,
    allowHeaders: ['Origin, X-Requested-With, Content-Type, Accept']
  }));

  Object(__WEBPACK_IMPORTED_MODULE_3__routes_index__["a" /* default */])(app);
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__crudModels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin__ = __webpack_require__(17);



/* harmony default export */ __webpack_exports__["a"] = (function (app) {
  app.use(__WEBPACK_IMPORTED_MODULE_0__crudModels__["a" /* default */].middleware());
  app.use(__WEBPACK_IMPORTED_MODULE_1__admin__["a" /* default */].middleware());
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__db_models_beverage__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__db_models_fCourse__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__db_models_sCourse__ = __webpack_require__(6);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







var models = {
  beverage: __WEBPACK_IMPORTED_MODULE_2__db_models_beverage__["a" /* default */],
  fCourse: __WEBPACK_IMPORTED_MODULE_3__db_models_fCourse__["a" /* default */],
  sCourse: __WEBPACK_IMPORTED_MODULE_4__db_models_sCourse__["a" /* default */]
};

var crudRouter = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a({ prefix: '/api' });

crudRouter.get('/allProducts', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var dataForReturn, modelName;
    return __WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //Получение всех

            dataForReturn = {};
            _context.t0 = __WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default.a.keys(models);

          case 2:
            if ((_context.t1 = _context.t0()).done) {
              _context.next = 9;
              break;
            }

            modelName = _context.t1.value;
            _context.next = 6;
            return models[modelName].find();

          case 6:
            dataForReturn[modelName] = _context.sent;
            _context.next = 2;
            break;

          case 9:

            ctx.body = dataForReturn;

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()).get('/:nameModel', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    var nameModel, model;
    return __WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //Получение по id


            if (!ctx.params.nameModel) ctx.throw(500, 'nameModel cant be null');

            nameModel = ctx.params.nameModel;


            if (Object.keys(models).indexOf(nameModel) === -1) ctx.throw(500, 'model ' + nameModel + ' not found');

            _context2.prev = 3;
            model = models[ctx.params.nameModel];
            _context2.next = 7;
            return model.find();

          case 7:
            ctx.body = _context2.sent;
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2['catch'](3);

            ctx.body = _context2.t0;
            console.log(_context2.t0);

          case 14:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[3, 10]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()).get('/:nameModel/:id', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
    var nameModel, model, _id;

    return __WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //Получение по id

            if (!ctx.params.nameModel && !ctx.params.id) ctx.throw(500, 'id or nameModel cant be null');

            nameModel = ctx.params.nameModel;


            if (Object.keys(models).indexOf(nameModel) === -1) ctx.throw(500, 'model ' + nameModel + ' not found');

            _context3.prev = 3;
            model = models[nameModel];
            _id = ctx.params.id;
            _context3.next = 8;
            return model.find({ _id: _id });

          case 8:
            ctx.body = _context3.sent;
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3['catch'](3);

            ctx.throw(500, _context3.t0);

          case 14:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[3, 11]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}()).post('/', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
    var _ctx$request$body, _nameModel, name, price, newBev, data;

    return __WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!(!ctx.request.body.name && !ctx.request.body.price && !ctx.request.body.nameModel)) {
              _context4.next = 4;
              break;
            }

            ctx.status = 500;
            ctx.body = 'nameModel or price or name not send';
            return _context4.abrupt('return');

          case 4:
            _context4.prev = 4;
            _ctx$request$body = ctx.request.body, _nameModel = _ctx$request$body.nameModel, name = _ctx$request$body.name, price = _ctx$request$body.price;
            newBev = new models[_nameModel]({
              name: name,
              price: price
            });
            _context4.next = 9;
            return newBev.save();

          case 9:
            data = _context4.sent;


            ctx.body = data;

            _context4.next = 17;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4['catch'](4);

            ctx.body = _context4.t0;
            console.log(_context4.t0);

          case 17:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this, [[4, 13]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}()).put('/:nameModel/:id', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(ctx, next) {
    var res;
    return __WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            // изменение

            if (Object.keys(models).indexOf(nameModel) === -1) ctx.throw(500, 'model ' + nameModel + ' not found');

            _context5.prev = 1;
            _context5.next = 4;
            return models[nameModel].findByIdAndUpdate(ctx.params.id, { price: ctx.params.price });

          case 4:
            res = _context5.sent;
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5['catch'](1);

            ctx.body = _context5.t0;

          case 10:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this, [[1, 7]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}()).delete('/:nameModel/:id', function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            // удаление

            if (Object.keys(models).indexOf(nameModel) === -1) ctx.throw(500, 'model ' + nameModel + ' not found');

            _context6.prev = 1;
            _context6.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__db_models_beverage__["a" /* default */].findByIdAndRemove(ctx.params.id, function (err, doc) {
              if (err) ctx.body = err;else ctx.body = 200;
            });

          case 4:
            _context6.next = 9;
            break;

          case 6:
            _context6.prev = 6;
            _context6.t0 = _context6['catch'](1);

            ctx.body = _context6.t0;

          case 9:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, _this, [[1, 6]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["a"] = (crudRouter);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_otplib_authenticator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_otplib_authenticator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_otplib_authenticator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_crypto__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






__WEBPACK_IMPORTED_MODULE_2_otplib_authenticator___default.a.options = { crypto: __WEBPACK_IMPORTED_MODULE_3_crypto___default.a };

var adminRoute = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a({ prefix: '/admin' });

var disabledIPs = [//ip с ожиданием окончания unixTime для повторного ввода кода 
{ ip: 0, unixTimeOut: 0 }];

adminRoute.post('/code', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
        var unixNow, response, userIP, didDisabledIp, token, didTokenCorrect;
        return __WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        unixNow = Math.round(new Date().getTime() / 1000.0);

                        // модель ответа

                        response = {
                            unixTimeOut: unixNow + 30,
                            login: false,
                            message: ''
                        };
                        userIP = ctx.request.ip;

                        // поиск по пользователям в таймАуте

                        didDisabledIp = disabledIPs.findIndex(function (value) {
                            return value.ip === userIP;
                        });

                        // в таймАуте 

                        if (!(didDisabledIp > -1)) {
                            _context.next = 14;
                            break;
                        }

                        if (!(disabledIPs[didDisabledIp].unixTimeOut <= unixNow)) {
                            _context.next = 10;
                            break;
                        }

                        console.log(disabledIPs, unixNow);
                        disabledIPs.splice(didDisabledIp, 1);

                        _context.next = 14;
                        break;

                    case 10:
                        response.message = 'время не вышло';
                        response.unixTimeOut = disabledIPs[didDisabledIp].unixTimeOut;
                        ctx.body = response;
                        return _context.abrupt('return');

                    case 14:

                        //проверка кода
                        token = __WEBPACK_IMPORTED_MODULE_2_otplib_authenticator___default.a.generate('RGAs6QgusSdLhX3wpYdLWsfN');
                        didTokenCorrect = ctx.request.body.token === token;

                        //код верен

                        if (!didTokenCorrect) {
                            _context.next = 21;
                            break;
                        }

                        response.message = 'Добро Пожаловать' + userIP;
                        response.login = true;
                        ctx.body = response;
                        return _context.abrupt('return');

                    case 21:

                        // код не верен
                        disabledIPs.push({ ip: userIP, unixTimeOut: response.unixTimeOut });
                        response.message = 'Код не верен';
                        ctx.body = response;

                    case 24:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

/* harmony default export */ __webpack_exports__["a"] = (adminRoute);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("otplib/authenticator");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0_C_Users_GTech_Desktop_web_webMenu_server_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return next();

          case 3:

            if (ctx.status === 404 && ctx.res.headersSent === false) {
              ctx.throw(404);
            }

            if (ctx.status === 200 && ctx.res.headersSent === false) {
              ctx.body = {
                status: 200,
                data: ctx.body
              };
            }
            _context.next = 13;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            ctx.status = _context.t0.status || 500;

            ctx.type = 'json';
            ctx.body = {
              status: ctx.status,
              message: _context.t0.message
            };

            ctx.app.emit('error', _context.t0, ctx);

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("kcors");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map