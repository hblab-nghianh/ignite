#! /usr/bin/env node

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

var _utilities = require('../utilities');

var Utilities = _interopRequireWildcard(_utilities);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SagaGenerator = function (_Generators$Base) {
  _inherits(SagaGenerator, _Generators$Base);

  function SagaGenerator(args, options) {
    _classCallCheck(this, SagaGenerator);

    // this.argument('name', { type: String, required: true })

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SagaGenerator).call(this, args, options));

    _this.fileConfig = {
      templatePath: 'saga.js.template',
      destinationPath: 'Sagas',
      test: true };
    return _this;
  }

  _createClass(SagaGenerator, [{
    key: 'generateApp',
    value: function generateApp() {
      console.log('HALOOOOOOOOOO');
      // Utilities.createFiles(this, this.fileConfig)
    }
  }, {
    key: 'end',
    value: function end() {
      console.log('Time to get cooking! 🍽 ');
    }
  }]);

  return SagaGenerator;
}(_yeomanGenerator2.default.Base);

module.exports = SagaGenerator;