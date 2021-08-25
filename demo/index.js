(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.AILabel = factory());
}(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty$1(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var events$1 = {exports: {}};

  var R = typeof Reflect === 'object' ? Reflect : null;
  var ReflectApply = R && typeof R.apply === 'function'
    ? R.apply
    : function ReflectApply(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };

  var ReflectOwnKeys;
  if (R && typeof R.ownKeys === 'function') {
    ReflectOwnKeys = R.ownKeys;
  } else if (Object.getOwnPropertySymbols) {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
      return Object.getOwnPropertyNames(target)
        .concat(Object.getOwnPropertySymbols(target));
    };
  } else {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
      return Object.getOwnPropertyNames(target);
    };
  }

  function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
  }

  var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
  };

  function EventEmitter() {
    EventEmitter.init.call(this);
  }
  events$1.exports = EventEmitter;
  events$1.exports.once = once;

  // Backwards-compat with node 0.10.x
  EventEmitter.EventEmitter = EventEmitter;

  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._eventsCount = 0;
  EventEmitter.prototype._maxListeners = undefined;

  // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.
  var defaultMaxListeners = 10;

  function checkListener(listener) {
    if (typeof listener !== 'function') {
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
    }
  }

  Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
      }
      defaultMaxListeners = arg;
    }
  });

  EventEmitter.init = function() {

    if (this._events === undefined ||
        this._events === Object.getPrototypeOf(this)._events) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    }

    this._maxListeners = this._maxListeners || undefined;
  };

  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
    }
    this._maxListeners = n;
    return this;
  };

  function _getMaxListeners(that) {
    if (that._maxListeners === undefined)
      return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
  }

  EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
  };

  EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
    var doError = (type === 'error');

    var events = this._events;
    if (events !== undefined)
      doError = (doError && events.error === undefined);
    else if (!doError)
      return false;

    // If there is no 'error' event listener then throw.
    if (doError) {
      var er;
      if (args.length > 0)
        er = args[0];
      if (er instanceof Error) {
        // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
      }
      // At least give some kind of context to the user
      var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
      err.context = er;
      throw err; // Unhandled 'error' event
    }

    var handler = events[type];

    if (handler === undefined)
      return false;

    if (typeof handler === 'function') {
      ReflectApply(handler, this, args);
    } else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        ReflectApply(listeners[i], this, args);
    }

    return true;
  };

  function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;

    checkListener(listener);

    events = target._events;
    if (events === undefined) {
      events = target._events = Object.create(null);
      target._eventsCount = 0;
    } else {
      // To avoid recursion in the case that type === "newListener"! Before
      // adding it to the listeners, first emit "newListener".
      if (events.newListener !== undefined) {
        target.emit('newListener', type,
                    listener.listener ? listener.listener : listener);

        // Re-assign `events` because a newListener handler could have caused the
        // this._events to be assigned to a new object
        events = target._events;
      }
      existing = events[type];
    }

    if (existing === undefined) {
      // Optimize the case of one listener. Don't need the extra array object.
      existing = events[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === 'function') {
        // Adding the second element, need to change to array.
        existing = events[type] =
          prepend ? [listener, existing] : [existing, listener];
        // If we've already got an array, just append.
      } else if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }

      // Check for listener leak
      m = _getMaxListeners(target);
      if (m > 0 && existing.length > m && !existing.warned) {
        existing.warned = true;
        // No error code for this since it is a Warning
        // eslint-disable-next-line no-restricted-syntax
        var w = new Error('Possible EventEmitter memory leak detected. ' +
                            existing.length + ' ' + String(type) + ' listeners ' +
                            'added. Use emitter.setMaxListeners() to ' +
                            'increase limit');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        ProcessEmitWarning(w);
      }
    }

    return target;
  }

  EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };

  EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  EventEmitter.prototype.prependListener =
      function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      };

  function onceWrapper() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      if (arguments.length === 0)
        return this.listener.call(this.target);
      return this.listener.apply(this.target, arguments);
    }
  }

  function _onceWrap(target, type, listener) {
    var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
  }

  EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };

  EventEmitter.prototype.prependOnceListener =
      function prependOnceListener(type, listener) {
        checkListener(listener);
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      };

  // Emits a 'removeListener' event if and only if the listener was removed.
  EventEmitter.prototype.removeListener =
      function removeListener(type, listener) {
        var list, events, position, i, originalListener;

        checkListener(listener);

        events = this._events;
        if (events === undefined)
          return this;

        list = events[type];
        if (list === undefined)
          return this;

        if (list === listener || list.listener === listener) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else {
            delete events[type];
            if (events.removeListener)
              this.emit('removeListener', type, list.listener || listener);
          }
        } else if (typeof list !== 'function') {
          position = -1;

          for (i = list.length - 1; i >= 0; i--) {
            if (list[i] === listener || list[i].listener === listener) {
              originalListener = list[i].listener;
              position = i;
              break;
            }
          }

          if (position < 0)
            return this;

          if (position === 0)
            list.shift();
          else {
            spliceOne(list, position);
          }

          if (list.length === 1)
            events[type] = list[0];

          if (events.removeListener !== undefined)
            this.emit('removeListener', type, originalListener || listener);
        }

        return this;
      };

  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

  EventEmitter.prototype.removeAllListeners =
      function removeAllListeners(type) {
        var listeners, events, i;

        events = this._events;
        if (events === undefined)
          return this;

        // not listening for removeListener, no need to emit
        if (events.removeListener === undefined) {
          if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
          } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0)
              this._events = Object.create(null);
            else
              delete events[type];
          }
          return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
          var keys = Object.keys(events);
          var key;
          for (i = 0; i < keys.length; ++i) {
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners('removeListener');
          this._events = Object.create(null);
          this._eventsCount = 0;
          return this;
        }

        listeners = events[type];

        if (typeof listeners === 'function') {
          this.removeListener(type, listeners);
        } else if (listeners !== undefined) {
          // LIFO order
          for (i = listeners.length - 1; i >= 0; i--) {
            this.removeListener(type, listeners[i]);
          }
        }

        return this;
      };

  function _listeners(target, type, unwrap) {
    var events = target._events;

    if (events === undefined)
      return [];

    var evlistener = events[type];
    if (evlistener === undefined)
      return [];

    if (typeof evlistener === 'function')
      return unwrap ? [evlistener.listener || evlistener] : [evlistener];

    return unwrap ?
      unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  }

  EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
  };

  EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
  };

  EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') {
      return emitter.listenerCount(type);
    } else {
      return listenerCount.call(emitter, type);
    }
  };

  EventEmitter.prototype.listenerCount = listenerCount;
  function listenerCount(type) {
    var events = this._events;

    if (events !== undefined) {
      var evlistener = events[type];

      if (typeof evlistener === 'function') {
        return 1;
      } else if (evlistener !== undefined) {
        return evlistener.length;
      }
    }

    return 0;
  }

  EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
  };

  function arrayClone(arr, n) {
    var copy = new Array(n);
    for (var i = 0; i < n; ++i)
      copy[i] = arr[i];
    return copy;
  }

  function spliceOne(list, index) {
    for (; index + 1 < list.length; index++)
      list[index] = list[index + 1];
    list.pop();
  }

  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
      ret[i] = arr[i].listener || arr[i];
    }
    return ret;
  }

  function once(emitter, name) {
    return new Promise(function (resolve, reject) {
      function errorListener(err) {
        emitter.removeListener(name, resolver);
        reject(err);
      }

      function resolver() {
        if (typeof emitter.removeListener === 'function') {
          emitter.removeListener('error', errorListener);
        }
        resolve([].slice.call(arguments));
      }
      eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
      if (name !== 'error') {
        addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
      }
    });
  }

  function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === 'function') {
      eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
    }
  }

  function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === 'function') {
      if (flags.once) {
        emitter.once(name, listener);
      } else {
        emitter.on(name, listener);
      }
    } else if (typeof emitter.addEventListener === 'function') {
      // EventTarget does not have `error` event semantics like Node
      // EventEmitters, we do not listen for `error` events here.
      emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) {
          emitter.removeEventListener(name, wrapListener);
        }
        listener(arg);
      });
    } else {
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
    }
  }

  var events = events$1.exports;

  /** Detect free variable `global` from Node.js. */

  var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal$1;

  var freeGlobal = _freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root$8 = freeGlobal || freeSelf || Function('return this')();

  var _root = root$8;

  var root$7 = _root;

  /** Built-in value references. */
  var Symbol$6 = root$7.Symbol;

  var _Symbol = Symbol$6;

  var Symbol$5 = _Symbol;

  /** Used for built-in method references. */
  var objectProto$f = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$c = objectProto$f.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$f.toString;

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$5 ? Symbol$5.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$c.call(value, symToStringTag$1),
        tag = value[symToStringTag$1];

    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  var _getRawTag = getRawTag$1;

  /** Used for built-in method references. */

  var objectProto$e = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto$e.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }

  var _objectToString = objectToString$1;

  var Symbol$4 = _Symbol,
      getRawTag = _getRawTag,
      objectToString = _objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = Symbol$4 ? Symbol$4.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag$7(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  var _baseGetTag = baseGetTag$7;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */

  function isObject$8(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject$8;

  var baseGetTag$6 = _baseGetTag,
      isObject$7 = isObject_1;

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag$2 = '[object Function]',
      genTag$1 = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction$2(value) {
    if (!isObject$7(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag$6(value);
    return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction$2;

  var root$6 = _root;

  /** Used to detect overreaching core-js shims. */
  var coreJsData$1 = root$6['__core-js_shared__'];

  var _coreJsData = coreJsData$1;

  var coreJsData = _coreJsData;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked$1(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  var _isMasked = isMasked$1;

  /** Used for built-in method references. */

  var funcProto$1 = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource$2(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  var _toSource = toSource$2;

  var isFunction$1 = isFunction_1,
      isMasked = _isMasked,
      isObject$6 = isObject_1,
      toSource$1 = _toSource;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto$d = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$b = objectProto$d.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty$b).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative$1(value) {
    if (!isObject$6(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource$1(value));
  }

  var _baseIsNative = baseIsNative$1;

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */

  function getValue$1(object, key) {
    return object == null ? undefined : object[key];
  }

  var _getValue = getValue$1;

  var baseIsNative = _baseIsNative,
      getValue = _getValue;

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative$7(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  var _getNative = getNative$7;

  var getNative$6 = _getNative;

  var defineProperty$2 = (function() {
    try {
      var func = getNative$6(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }());

  var _defineProperty = defineProperty$2;

  var defineProperty$1 = _defineProperty;

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue$2(object, key, value) {
    if (key == '__proto__' && defineProperty$1) {
      defineProperty$1(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  var _baseAssignValue = baseAssignValue$2;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */

  function eq$4(value, other) {
    return value === other || (value !== value && other !== other);
  }

  var eq_1 = eq$4;

  var baseAssignValue$1 = _baseAssignValue,
      eq$3 = eq_1;

  /** Used for built-in method references. */
  var objectProto$c = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$a = objectProto$c.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue$3(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$a.call(object, key) && eq$3(objValue, value)) ||
        (value === undefined && !(key in object))) {
      baseAssignValue$1(object, key, value);
    }
  }

  var _assignValue = assignValue$3;

  var assignValue$2 = _assignValue,
      baseAssignValue = _baseAssignValue;

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject$5(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue$2(object, key, newValue);
      }
    }
    return object;
  }

  var _copyObject = copyObject$5;

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */

  function identity$4(value) {
    return value;
  }

  var identity_1 = identity$4;

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */

  function apply$1(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  var _apply = apply$1;

  var apply = _apply;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$1 = Math.max;

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest$1(func, start, transform) {
    start = nativeMax$1(start === undefined ? (func.length - 1) : start, 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax$1(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }

  var _overRest = overRest$1;

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */

  function constant$1(value) {
    return function() {
      return value;
    };
  }

  var constant_1 = constant$1;

  var constant = constant_1,
      defineProperty = _defineProperty,
      identity$3 = identity_1;

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString$1 = !defineProperty ? identity$3 : function(func, string) {
    return defineProperty(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant(string),
      'writable': true
    });
  };

  var _baseSetToString = baseSetToString$1;

  /** Used to detect hot functions by number of calls within a span of milliseconds. */

  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeNow = Date.now;

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut$1(func) {
    var count = 0,
        lastCalled = 0;

    return function() {
      var stamp = nativeNow(),
          remaining = HOT_SPAN - (stamp - lastCalled);

      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }

  var _shortOut = shortOut$1;

  var baseSetToString = _baseSetToString,
      shortOut = _shortOut;

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString$1 = shortOut(baseSetToString);

  var _setToString = setToString$1;

  var identity$2 = identity_1,
      overRest = _overRest,
      setToString = _setToString;

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest$1(func, start) {
    return setToString(overRest(func, start, identity$2), func + '');
  }

  var _baseRest = baseRest$1;

  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength$3(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
  }

  var isLength_1 = isLength$3;

  var isFunction = isFunction_1,
      isLength$2 = isLength_1;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike$7(value) {
    return value != null && isLength$2(value.length) && !isFunction(value);
  }

  var isArrayLike_1 = isArrayLike$7;

  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex$3(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;

    return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
  }

  var _isIndex = isIndex$3;

  var eq$2 = eq_1,
      isArrayLike$6 = isArrayLike_1,
      isIndex$2 = _isIndex,
      isObject$5 = isObject_1;

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall$1(value, index, object) {
    if (!isObject$5(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number'
          ? (isArrayLike$6(object) && isIndex$2(index, object.length))
          : (type == 'string' && index in object)
        ) {
      return eq$2(object[index], value);
    }
    return false;
  }

  var _isIterateeCall = isIterateeCall$1;

  var baseRest = _baseRest,
      isIterateeCall = _isIterateeCall;

  /**
   * Creates a function like `_.assign`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */
  function createAssigner$1(assigner) {
    return baseRest(function(object, sources) {
      var index = -1,
          length = sources.length,
          customizer = length > 1 ? sources[length - 1] : undefined,
          guard = length > 2 ? sources[2] : undefined;

      customizer = (assigner.length > 3 && typeof customizer == 'function')
        ? (length--, customizer)
        : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  var _createAssigner = createAssigner$1;

  /** Used for built-in method references. */

  var objectProto$b = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype$4(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$b;

    return value === proto;
  }

  var _isPrototype = isPrototype$4;

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */

  function baseTimes$1(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  var _baseTimes = baseTimes$1;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */

  function isObjectLike$9(value) {
    return value != null && typeof value == 'object';
  }

  var isObjectLike_1 = isObjectLike$9;

  var baseGetTag$5 = _baseGetTag,
      isObjectLike$8 = isObjectLike_1;

  /** `Object#toString` result references. */
  var argsTag$3 = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments$1(value) {
    return isObjectLike$8(value) && baseGetTag$5(value) == argsTag$3;
  }

  var _baseIsArguments = baseIsArguments$1;

  var baseIsArguments = _baseIsArguments,
      isObjectLike$7 = isObjectLike_1;

  /** Used for built-in method references. */
  var objectProto$a = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$9 = objectProto$a.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments$2 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
    return isObjectLike$7(value) && hasOwnProperty$9.call(value, 'callee') &&
      !propertyIsEnumerable$1.call(value, 'callee');
  };

  var isArguments_1 = isArguments$2;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */

  var isArray$d = Array.isArray;

  var isArray_1 = isArray$d;

  var isBuffer$3 = {exports: {}};

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */

  function stubFalse() {
    return false;
  }

  var stubFalse_1 = stubFalse;

  (function (module, exports) {
  var root = _root,
      stubFalse = stubFalse_1;

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  module.exports = isBuffer;
  }(isBuffer$3, isBuffer$3.exports));

  var baseGetTag$4 = _baseGetTag,
      isLength$1 = isLength_1,
      isObjectLike$6 = isObjectLike_1;

  /** `Object#toString` result references. */
  var argsTag$2 = '[object Arguments]',
      arrayTag$2 = '[object Array]',
      boolTag$3 = '[object Boolean]',
      dateTag$3 = '[object Date]',
      errorTag$2 = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag$5 = '[object Map]',
      numberTag$4 = '[object Number]',
      objectTag$3 = '[object Object]',
      regexpTag$3 = '[object RegExp]',
      setTag$5 = '[object Set]',
      stringTag$4 = '[object String]',
      weakMapTag$2 = '[object WeakMap]';

  var arrayBufferTag$3 = '[object ArrayBuffer]',
      dataViewTag$4 = '[object DataView]',
      float32Tag$2 = '[object Float32Array]',
      float64Tag$2 = '[object Float64Array]',
      int8Tag$2 = '[object Int8Array]',
      int16Tag$2 = '[object Int16Array]',
      int32Tag$2 = '[object Int32Array]',
      uint8Tag$2 = '[object Uint8Array]',
      uint8ClampedTag$2 = '[object Uint8ClampedArray]',
      uint16Tag$2 = '[object Uint16Array]',
      uint32Tag$2 = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] =
  typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] =
  typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] =
  typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] =
  typedArrayTags[uint32Tag$2] = true;
  typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] =
  typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] =
  typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] =
  typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] =
  typedArrayTags[mapTag$5] = typedArrayTags[numberTag$4] =
  typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$3] =
  typedArrayTags[setTag$5] = typedArrayTags[stringTag$4] =
  typedArrayTags[weakMapTag$2] = false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray$1(value) {
    return isObjectLike$6(value) &&
      isLength$1(value.length) && !!typedArrayTags[baseGetTag$4(value)];
  }

  var _baseIsTypedArray = baseIsTypedArray$1;

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */

  function baseUnary$3(func) {
    return function(value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary$3;

  var _nodeUtil = {exports: {}};

  (function (module, exports) {
  var freeGlobal = _freeGlobal;

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  module.exports = nodeUtil;
  }(_nodeUtil, _nodeUtil.exports));

  var baseIsTypedArray = _baseIsTypedArray,
      baseUnary$2 = _baseUnary,
      nodeUtil$2 = _nodeUtil.exports;

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray$2 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;

  var isTypedArray_1 = isTypedArray$2;

  var baseTimes = _baseTimes,
      isArguments$1 = isArguments_1,
      isArray$c = isArray_1,
      isBuffer$2 = isBuffer$3.exports,
      isIndex$1 = _isIndex,
      isTypedArray$1 = isTypedArray_1;

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$8 = objectProto$9.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys$2(value, inherited) {
    var isArr = isArray$c(value),
        isArg = !isArr && isArguments$1(value),
        isBuff = !isArr && !isArg && isBuffer$2(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$8.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             isIndex$1(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  var _arrayLikeKeys = arrayLikeKeys$2;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */

  function overArg$2(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg$2;

  var overArg$1 = _overArg;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys$1 = overArg$1(Object.keys, Object);

  var _nativeKeys = nativeKeys$1;

  var isPrototype$3 = _isPrototype,
      nativeKeys = _nativeKeys;

  /** Used for built-in method references. */
  var objectProto$8 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys$1(object) {
    if (!isPrototype$3(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeys = baseKeys$1;

  var arrayLikeKeys$1 = _arrayLikeKeys,
      baseKeys = _baseKeys,
      isArrayLike$5 = isArrayLike_1;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys$7(object) {
    return isArrayLike$5(object) ? arrayLikeKeys$1(object) : baseKeys(object);
  }

  var keys_1 = keys$7;

  var assignValue$1 = _assignValue,
      copyObject$4 = _copyObject,
      createAssigner = _createAssigner,
      isArrayLike$4 = isArrayLike_1,
      isPrototype$2 = _isPrototype,
      keys$6 = keys_1;

  /** Used for built-in method references. */
  var objectProto$7 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

  /**
   * Assigns own enumerable string keyed properties of source objects to the
   * destination object. Source objects are applied from left to right.
   * Subsequent sources overwrite property assignments of previous sources.
   *
   * **Note:** This method mutates `object` and is loosely based on
   * [`Object.assign`](https://mdn.io/Object/assign).
   *
   * @static
   * @memberOf _
   * @since 0.10.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.assignIn
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * function Bar() {
   *   this.c = 3;
   * }
   *
   * Foo.prototype.b = 2;
   * Bar.prototype.d = 4;
   *
   * _.assign({ 'a': 0 }, new Foo, new Bar);
   * // => { 'a': 1, 'c': 3 }
   */
  var assign = createAssigner(function(object, source) {
    if (isPrototype$2(source) || isArrayLike$4(source)) {
      copyObject$4(source, keys$6(source), object);
      return;
    }
    for (var key in source) {
      if (hasOwnProperty$6.call(source, key)) {
        assignValue$1(object, key, source[key]);
      }
    }
  });

  var assign_1 = assign;

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */

  function arrayMap$3(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  var _arrayMap = arrayMap$3;

  var baseGetTag$3 = _baseGetTag,
      isObjectLike$5 = isObjectLike_1;

  /** `Object#toString` result references. */
  var symbolTag$3 = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol$4(value) {
    return typeof value == 'symbol' ||
      (isObjectLike$5(value) && baseGetTag$3(value) == symbolTag$3);
  }

  var isSymbol_1 = isSymbol$4;

  var Symbol$3 = _Symbol,
      arrayMap$2 = _arrayMap,
      isArray$b = isArray_1,
      isSymbol$3 = isSymbol_1;

  /** Used as references for various `Number` constants. */
  var INFINITY$3 = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$2 = Symbol$3 ? Symbol$3.prototype : undefined,
      symbolToString = symbolProto$2 ? symbolProto$2.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString$1(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray$b(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap$2(value, baseToString$1) + '';
    }
    if (isSymbol$3(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY$3) ? '-0' : result;
  }

  var _baseToString = baseToString$1;

  var baseToString = _baseToString;

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString$2(value) {
    return value == null ? '' : baseToString(value);
  }

  var toString_1 = toString$2;

  var toString$1 = toString_1;

  /** Used to generate unique IDs. */
  var idCounter = 0;

  /**
   * Generates a unique ID. If `prefix` is given, the ID is appended to it.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {string} [prefix=''] The value to prefix the ID with.
   * @returns {string} Returns the unique ID.
   * @example
   *
   * _.uniqueId('contact_');
   * // => 'contact_104'
   *
   * _.uniqueId();
   * // => '105'
   */
  function uniqueId(prefix) {
    var id = ++idCounter;
    return toString$1(prefix) + id;
  }

  var uniqueId_1 = uniqueId;

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */

  function arrayEach$2(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  var _arrayEach = arrayEach$2;

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */

  function createBaseFor$1(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  var _createBaseFor = createBaseFor$1;

  var createBaseFor = _createBaseFor;

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor$1 = createBaseFor();

  var _baseFor = baseFor$1;

  var baseFor = _baseFor,
      keys$5 = keys_1;

  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwn$1(object, iteratee) {
    return object && baseFor(object, iteratee, keys$5);
  }

  var _baseForOwn = baseForOwn$1;

  var isArrayLike$3 = isArrayLike_1;

  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseEach$1(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike$3(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length,
          index = fromRight ? length : -1,
          iterable = Object(collection);

      while ((fromRight ? index-- : ++index < length)) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }

  var _createBaseEach = createBaseEach$1;

  var baseForOwn = _baseForOwn,
      createBaseEach = _createBaseEach;

  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEach$3 = createBaseEach(baseForOwn);

  var _baseEach = baseEach$3;

  var identity$1 = identity_1;

  /**
   * Casts `value` to `identity` if it's not a function.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Function} Returns cast function.
   */
  function castFunction$1(value) {
    return typeof value == 'function' ? value : identity$1;
  }

  var _castFunction = castFunction$1;

  var arrayEach$1 = _arrayEach,
      baseEach$2 = _baseEach,
      castFunction = _castFunction,
      isArray$a = isArray_1;

  /**
   * Iterates over elements of `collection` and invokes `iteratee` for each element.
   * The iteratee is invoked with three arguments: (value, index|key, collection).
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * **Note:** As with other "Collections" methods, objects with a "length"
   * property are iterated like arrays. To avoid this behavior use `_.forIn`
   * or `_.forOwn` for object iteration.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @alias each
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   * @see _.forEachRight
   * @example
   *
   * _.forEach([1, 2], function(value) {
   *   console.log(value);
   * });
   * // => Logs `1` then `2`.
   *
   * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'a' then 'b' (iteration order is not guaranteed).
   */
  function forEach(collection, iteratee) {
    var func = isArray$a(collection) ? arrayEach$1 : baseEach$2;
    return func(collection, castFunction(iteratee));
  }

  var forEach_1 = forEach;

  var isArray$9 = isArray_1,
      isSymbol$2 = isSymbol_1;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey$3(value, object) {
    if (isArray$9(value)) {
      return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' ||
        value == null || isSymbol$2(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
      (object != null && value in Object(object));
  }

  var _isKey = isKey$3;

  var getNative$5 = _getNative;

  /* Built-in method references that are verified to be native. */
  var nativeCreate$4 = getNative$5(Object, 'create');

  var _nativeCreate = nativeCreate$4;

  var nativeCreate$3 = _nativeCreate;

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear$1() {
    this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
    this.size = 0;
  }

  var _hashClear = hashClear$1;

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function hashDelete$1(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  var _hashDelete = hashDelete$1;

  var nativeCreate$2 = _nativeCreate;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$6 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet$1(key) {
    var data = this.__data__;
    if (nativeCreate$2) {
      var result = data[key];
      return result === HASH_UNDEFINED$2 ? undefined : result;
    }
    return hasOwnProperty$5.call(data, key) ? data[key] : undefined;
  }

  var _hashGet = hashGet$1;

  var nativeCreate$1 = _nativeCreate;

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas$1(key) {
    var data = this.__data__;
    return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$4.call(data, key);
  }

  var _hashHas = hashHas$1;

  var nativeCreate = _nativeCreate;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet$1(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
    return this;
  }

  var _hashSet = hashSet$1;

  var hashClear = _hashClear,
      hashDelete = _hashDelete,
      hashGet = _hashGet,
      hashHas = _hashHas,
      hashSet = _hashSet;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash$1(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash$1.prototype.clear = hashClear;
  Hash$1.prototype['delete'] = hashDelete;
  Hash$1.prototype.get = hashGet;
  Hash$1.prototype.has = hashHas;
  Hash$1.prototype.set = hashSet;

  var _Hash = Hash$1;

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */

  function listCacheClear$1() {
    this.__data__ = [];
    this.size = 0;
  }

  var _listCacheClear = listCacheClear$1;

  var eq$1 = eq_1;

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf$4(array, key) {
    var length = array.length;
    while (length--) {
      if (eq$1(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  var _assocIndexOf = assocIndexOf$4;

  var assocIndexOf$3 = _assocIndexOf;

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete$1(key) {
    var data = this.__data__,
        index = assocIndexOf$3(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  var _listCacheDelete = listCacheDelete$1;

  var assocIndexOf$2 = _assocIndexOf;

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet$1(key) {
    var data = this.__data__,
        index = assocIndexOf$2(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  var _listCacheGet = listCacheGet$1;

  var assocIndexOf$1 = _assocIndexOf;

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas$1(key) {
    return assocIndexOf$1(this.__data__, key) > -1;
  }

  var _listCacheHas = listCacheHas$1;

  var assocIndexOf = _assocIndexOf;

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet$1(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  var _listCacheSet = listCacheSet$1;

  var listCacheClear = _listCacheClear,
      listCacheDelete = _listCacheDelete,
      listCacheGet = _listCacheGet,
      listCacheHas = _listCacheHas,
      listCacheSet = _listCacheSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache$4(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache$4.prototype.clear = listCacheClear;
  ListCache$4.prototype['delete'] = listCacheDelete;
  ListCache$4.prototype.get = listCacheGet;
  ListCache$4.prototype.has = listCacheHas;
  ListCache$4.prototype.set = listCacheSet;

  var _ListCache = ListCache$4;

  var getNative$4 = _getNative,
      root$5 = _root;

  /* Built-in method references that are verified to be native. */
  var Map$4 = getNative$4(root$5, 'Map');

  var _Map = Map$4;

  var Hash = _Hash,
      ListCache$3 = _ListCache,
      Map$3 = _Map;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear$1() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map$3 || ListCache$3),
      'string': new Hash
    };
  }

  var _mapCacheClear = mapCacheClear$1;

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */

  function isKeyable$1(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  var _isKeyable = isKeyable$1;

  var isKeyable = _isKeyable;

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData$4(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  var _getMapData = getMapData$4;

  var getMapData$3 = _getMapData;

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete$1(key) {
    var result = getMapData$3(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  var _mapCacheDelete = mapCacheDelete$1;

  var getMapData$2 = _getMapData;

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet$1(key) {
    return getMapData$2(this, key).get(key);
  }

  var _mapCacheGet = mapCacheGet$1;

  var getMapData$1 = _getMapData;

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas$1(key) {
    return getMapData$1(this, key).has(key);
  }

  var _mapCacheHas = mapCacheHas$1;

  var getMapData = _getMapData;

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet$1(key, value) {
    var data = getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  var _mapCacheSet = mapCacheSet$1;

  var mapCacheClear = _mapCacheClear,
      mapCacheDelete = _mapCacheDelete,
      mapCacheGet = _mapCacheGet,
      mapCacheHas = _mapCacheHas,
      mapCacheSet = _mapCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache$3(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache$3.prototype.clear = mapCacheClear;
  MapCache$3.prototype['delete'] = mapCacheDelete;
  MapCache$3.prototype.get = mapCacheGet;
  MapCache$3.prototype.has = mapCacheHas;
  MapCache$3.prototype.set = mapCacheSet;

  var _MapCache = MapCache$3;

  var MapCache$2 = _MapCache;

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize$1(func, resolver) {
    if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize$1.Cache || MapCache$2);
    return memoized;
  }

  // Expose `MapCache`.
  memoize$1.Cache = MapCache$2;

  var memoize_1 = memoize$1;

  var memoize = memoize_1;

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped$1(func) {
    var result = memoize(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });

    var cache = result.cache;
    return result;
  }

  var _memoizeCapped = memoizeCapped$1;

  var memoizeCapped = _memoizeCapped;

  /** Used to match property names within property paths. */
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath$1 = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  });

  var _stringToPath = stringToPath$1;

  var isArray$8 = isArray_1,
      isKey$2 = _isKey,
      stringToPath = _stringToPath,
      toString = toString_1;

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath$2(value, object) {
    if (isArray$8(value)) {
      return value;
    }
    return isKey$2(value, object) ? [value] : stringToPath(toString(value));
  }

  var _castPath = castPath$2;

  var isSymbol$1 = isSymbol_1;

  /** Used as references for various `Number` constants. */
  var INFINITY$2 = 1 / 0;

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey$4(value) {
    if (typeof value == 'string' || isSymbol$1(value)) {
      return value;
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY$2) ? '-0' : result;
  }

  var _toKey = toKey$4;

  var castPath$1 = _castPath,
      toKey$3 = _toKey;

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet$2(object, path) {
    path = castPath$1(path, object);

    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[toKey$3(path[index++])];
    }
    return (index && index == length) ? object : undefined;
  }

  var _baseGet = baseGet$2;

  var baseGet$1 = _baseGet;

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get$1(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet$1(object, path);
    return result === undefined ? defaultValue : result;
  }

  var get_1 = get$1;

  var baseGetTag$2 = _baseGetTag,
      isObjectLike$4 = isObjectLike_1;

  /** `Object#toString` result references. */
  var numberTag$3 = '[object Number]';

  /**
   * Checks if `value` is classified as a `Number` primitive or object.
   *
   * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
   * classified as numbers, use the `_.isFinite` method.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a number, else `false`.
   * @example
   *
   * _.isNumber(3);
   * // => true
   *
   * _.isNumber(Number.MIN_VALUE);
   * // => true
   *
   * _.isNumber(Infinity);
   * // => true
   *
   * _.isNumber('3');
   * // => false
   */
  function isNumber(value) {
    return typeof value == 'number' ||
      (isObjectLike$4(value) && baseGetTag$2(value) == numberTag$3);
  }

  var isNumber_1 = isNumber;

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */

  function arrayFilter$2(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  var _arrayFilter = arrayFilter$2;

  var baseEach$1 = _baseEach;

  /**
   * The base implementation of `_.filter` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function baseFilter$1(collection, predicate) {
    var result = [];
    baseEach$1(collection, function(value, index, collection) {
      if (predicate(value, index, collection)) {
        result.push(value);
      }
    });
    return result;
  }

  var _baseFilter = baseFilter$1;

  var ListCache$2 = _ListCache;

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear$1() {
    this.__data__ = new ListCache$2;
    this.size = 0;
  }

  var _stackClear = stackClear$1;

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function stackDelete$1(key) {
    var data = this.__data__,
        result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  var _stackDelete = stackDelete$1;

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */

  function stackGet$1(key) {
    return this.__data__.get(key);
  }

  var _stackGet = stackGet$1;

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function stackHas$1(key) {
    return this.__data__.has(key);
  }

  var _stackHas = stackHas$1;

  var ListCache$1 = _ListCache,
      Map$2 = _Map,
      MapCache$1 = _MapCache;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE$1 = 200;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet$1(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache$1) {
      var pairs = data.__data__;
      if (!Map$2 || (pairs.length < LARGE_ARRAY_SIZE$1 - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache$1(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  var _stackSet = stackSet$1;

  var ListCache = _ListCache,
      stackClear = _stackClear,
      stackDelete = _stackDelete,
      stackGet = _stackGet,
      stackHas = _stackHas,
      stackSet = _stackSet;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack$3(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }

  // Add methods to `Stack`.
  Stack$3.prototype.clear = stackClear;
  Stack$3.prototype['delete'] = stackDelete;
  Stack$3.prototype.get = stackGet;
  Stack$3.prototype.has = stackHas;
  Stack$3.prototype.set = stackSet;

  var _Stack = Stack$3;

  /** Used to stand-in for `undefined` hash values. */

  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd$1(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }

  var _setCacheAdd = setCacheAdd$1;

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */

  function setCacheHas$1(value) {
    return this.__data__.has(value);
  }

  var _setCacheHas = setCacheHas$1;

  var MapCache = _MapCache,
      setCacheAdd = _setCacheAdd,
      setCacheHas = _setCacheHas;

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache$2(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }

  // Add methods to `SetCache`.
  SetCache$2.prototype.add = SetCache$2.prototype.push = setCacheAdd;
  SetCache$2.prototype.has = setCacheHas;

  var _SetCache = SetCache$2;

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */

  function arraySome$1(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  var _arraySome = arraySome$1;

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function cacheHas$2(cache, key) {
    return cache.has(key);
  }

  var _cacheHas = cacheHas$2;

  var SetCache$1 = _SetCache,
      arraySome = _arraySome,
      cacheHas$1 = _cacheHas;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$5 = 1,
      COMPARE_UNORDERED_FLAG$3 = 2;

  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
  function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5,
        arrLength = array.length,
        othLength = other.length;

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index = -1,
        result = true,
        seen = (bitmask & COMPARE_UNORDERED_FLAG$3) ? new SetCache$1 : undefined;

    stack.set(array, other);
    stack.set(other, array);

    // Ignore non-index properties.
    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, arrValue, index, other, array, stack)
          : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== undefined) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      // Recursively compare arrays (susceptible to call stack limits).
      if (seen) {
        if (!arraySome(other, function(othValue, othIndex) {
              if (!cacheHas$1(seen, othIndex) &&
                  (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
          result = false;
          break;
        }
      } else if (!(
            arrValue === othValue ||
              equalFunc(arrValue, othValue, bitmask, customizer, stack)
          )) {
        result = false;
        break;
      }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
  }

  var _equalArrays = equalArrays$2;

  var root$4 = _root;

  /** Built-in value references. */
  var Uint8Array$2 = root$4.Uint8Array;

  var _Uint8Array = Uint8Array$2;

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */

  function mapToArray$1(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  var _mapToArray = mapToArray$1;

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */

  function setToArray$3(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  var _setToArray = setToArray$3;

  var Symbol$2 = _Symbol,
      Uint8Array$1 = _Uint8Array,
      eq = eq_1,
      equalArrays$1 = _equalArrays,
      mapToArray = _mapToArray,
      setToArray$2 = _setToArray;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$4 = 1,
      COMPARE_UNORDERED_FLAG$2 = 2;

  /** `Object#toString` result references. */
  var boolTag$2 = '[object Boolean]',
      dateTag$2 = '[object Date]',
      errorTag$1 = '[object Error]',
      mapTag$4 = '[object Map]',
      numberTag$2 = '[object Number]',
      regexpTag$2 = '[object RegExp]',
      setTag$4 = '[object Set]',
      stringTag$3 = '[object String]',
      symbolTag$2 = '[object Symbol]';

  var arrayBufferTag$2 = '[object ArrayBuffer]',
      dataViewTag$3 = '[object DataView]';

  /** Used to convert symbols to primitives and strings. */
  var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : undefined,
      symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : undefined;

  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag$3:
        if ((object.byteLength != other.byteLength) ||
            (object.byteOffset != other.byteOffset)) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag$2:
        if ((object.byteLength != other.byteLength) ||
            !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
          return false;
        }
        return true;

      case boolTag$2:
      case dateTag$2:
      case numberTag$2:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq(+object, +other);

      case errorTag$1:
        return object.name == other.name && object.message == other.message;

      case regexpTag$2:
      case stringTag$3:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == (other + '');

      case mapTag$4:
        var convert = mapToArray;

      case setTag$4:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
        convert || (convert = setToArray$2);

        if (object.size != other.size && !isPartial) {
          return false;
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG$2;

        // Recursively compare objects (susceptible to call stack limits).
        stack.set(object, other);
        var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack['delete'](object);
        return result;

      case symbolTag$2:
        if (symbolValueOf$1) {
          return symbolValueOf$1.call(object) == symbolValueOf$1.call(other);
        }
    }
    return false;
  }

  var _equalByTag = equalByTag$1;

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */

  function arrayPush$2(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  var _arrayPush = arrayPush$2;

  var arrayPush$1 = _arrayPush,
      isArray$7 = isArray_1;

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray$7(object) ? result : arrayPush$1(result, symbolsFunc(object));
  }

  var _baseGetAllKeys = baseGetAllKeys$2;

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */

  function stubArray$2() {
    return [];
  }

  var stubArray_1 = stubArray$2;

  var arrayFilter$1 = _arrayFilter,
      stubArray$1 = stubArray_1;

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter$1(nativeGetSymbols$1(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };

  var _getSymbols = getSymbols$3;

  var baseGetAllKeys$1 = _baseGetAllKeys,
      getSymbols$2 = _getSymbols,
      keys$4 = keys_1;

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys$2(object) {
    return baseGetAllKeys$1(object, keys$4, getSymbols$2);
  }

  var _getAllKeys = getAllKeys$2;

  var getAllKeys$1 = _getAllKeys;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$3 = 1;

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
        objProps = getAllKeys$1(object),
        objLength = objProps.length,
        othProps = getAllKeys$1(other),
        othLength = othProps.length;

    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty$3.call(other, key))) {
        return false;
      }
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);

    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, objValue, key, other, object, stack)
          : customizer(objValue, othValue, key, object, other, stack);
      }
      // Recursively compare objects (susceptible to call stack limits).
      if (!(compared === undefined
            ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
            : compared
          )) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;

      // Non `Object` object instances with different constructors are not equal.
      if (objCtor != othCtor &&
          ('constructor' in object && 'constructor' in other) &&
          !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
            typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
  }

  var _equalObjects = equalObjects$1;

  var getNative$3 = _getNative,
      root$3 = _root;

  /* Built-in method references that are verified to be native. */
  var DataView$1 = getNative$3(root$3, 'DataView');

  var _DataView = DataView$1;

  var getNative$2 = _getNative,
      root$2 = _root;

  /* Built-in method references that are verified to be native. */
  var Promise$2 = getNative$2(root$2, 'Promise');

  var _Promise = Promise$2;

  var getNative$1 = _getNative,
      root$1 = _root;

  /* Built-in method references that are verified to be native. */
  var Set$2 = getNative$1(root$1, 'Set');

  var _Set = Set$2;

  var getNative = _getNative,
      root = _root;

  /* Built-in method references that are verified to be native. */
  var WeakMap$1 = getNative(root, 'WeakMap');

  var _WeakMap = WeakMap$1;

  var DataView = _DataView,
      Map$1 = _Map,
      Promise$1 = _Promise,
      Set$1 = _Set,
      WeakMap = _WeakMap,
      baseGetTag$1 = _baseGetTag,
      toSource = _toSource;

  /** `Object#toString` result references. */
  var mapTag$3 = '[object Map]',
      objectTag$2 = '[object Object]',
      promiseTag = '[object Promise]',
      setTag$3 = '[object Set]',
      weakMapTag$1 = '[object WeakMap]';

  var dataViewTag$2 = '[object DataView]';

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map$1),
      promiseCtorString = toSource(Promise$1),
      setCtorString = toSource(Set$1),
      weakMapCtorString = toSource(WeakMap);

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag$4 = baseGetTag$1;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if ((DataView && getTag$4(new DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
      (Map$1 && getTag$4(new Map$1) != mapTag$3) ||
      (Promise$1 && getTag$4(Promise$1.resolve()) != promiseTag) ||
      (Set$1 && getTag$4(new Set$1) != setTag$3) ||
      (WeakMap && getTag$4(new WeakMap) != weakMapTag$1)) {
    getTag$4 = function(value) {
      var result = baseGetTag$1(value),
          Ctor = result == objectTag$2 ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag$2;
          case mapCtorString: return mapTag$3;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag$3;
          case weakMapCtorString: return weakMapTag$1;
        }
      }
      return result;
    };
  }

  var _getTag = getTag$4;

  var Stack$2 = _Stack,
      equalArrays = _equalArrays,
      equalByTag = _equalByTag,
      equalObjects = _equalObjects,
      getTag$3 = _getTag,
      isArray$6 = isArray_1,
      isBuffer$1 = isBuffer$3.exports,
      isTypedArray = isTypedArray_1;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$2 = 1;

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]',
      arrayTag$1 = '[object Array]',
      objectTag$1 = '[object Object]';

  /** Used for built-in method references. */
  var objectProto$2 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray$6(object),
        othIsArr = isArray$6(other),
        objTag = objIsArr ? arrayTag$1 : getTag$3(object),
        othTag = othIsArr ? arrayTag$1 : getTag$3(other);

    objTag = objTag == argsTag$1 ? objectTag$1 : objTag;
    othTag = othTag == argsTag$1 ? objectTag$1 : othTag;

    var objIsObj = objTag == objectTag$1,
        othIsObj = othTag == objectTag$1,
        isSameTag = objTag == othTag;

    if (isSameTag && isBuffer$1(object)) {
      if (!isBuffer$1(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack$2);
      return (objIsArr || isTypedArray(object))
        ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
        : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
      var objIsWrapped = objIsObj && hasOwnProperty$2.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty$2.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;

        stack || (stack = new Stack$2);
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack$2);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }

  var _baseIsEqualDeep = baseIsEqualDeep$1;

  var baseIsEqualDeep = _baseIsEqualDeep,
      isObjectLike$3 = isObjectLike_1;

  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual$2(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || (!isObjectLike$3(value) && !isObjectLike$3(other))) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
  }

  var _baseIsEqual = baseIsEqual$2;

  var Stack$1 = _Stack,
      baseIsEqual$1 = _baseIsEqual;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG$1 = 1,
      COMPARE_UNORDERED_FLAG$1 = 2;

  /**
   * The base implementation of `_.isMatch` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @param {Array} matchData The property names, values, and compare flags to match.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   */
  function baseIsMatch$1(object, source, matchData, customizer) {
    var index = matchData.length,
        length = index,
        noCustomizer = !customizer;

    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data = matchData[index];
      if ((noCustomizer && data[2])
            ? data[1] !== object[data[0]]
            : !(data[0] in object)
          ) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0],
          objValue = object[key],
          srcValue = data[1];

      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack$1;
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === undefined
              ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack)
              : result
            )) {
          return false;
        }
      }
    }
    return true;
  }

  var _baseIsMatch = baseIsMatch$1;

  var isObject$4 = isObject_1;

  /**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */
  function isStrictComparable$2(value) {
    return value === value && !isObject$4(value);
  }

  var _isStrictComparable = isStrictComparable$2;

  var isStrictComparable$1 = _isStrictComparable,
      keys$3 = keys_1;

  /**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */
  function getMatchData$1(object) {
    var result = keys$3(object),
        length = result.length;

    while (length--) {
      var key = result[length],
          value = object[key];

      result[length] = [key, value, isStrictComparable$1(value)];
    }
    return result;
  }

  var _getMatchData = getMatchData$1;

  /**
   * A specialized version of `matchesProperty` for source values suitable
   * for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */

  function matchesStrictComparable$2(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue &&
        (srcValue !== undefined || (key in Object(object)));
    };
  }

  var _matchesStrictComparable = matchesStrictComparable$2;

  var baseIsMatch = _baseIsMatch,
      getMatchData = _getMatchData,
      matchesStrictComparable$1 = _matchesStrictComparable;

  /**
   * The base implementation of `_.matches` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatches$1(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || baseIsMatch(object, source, matchData);
    };
  }

  var _baseMatches = baseMatches$1;

  /**
   * The base implementation of `_.hasIn` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */

  function baseHasIn$1(object, key) {
    return object != null && key in Object(object);
  }

  var _baseHasIn = baseHasIn$1;

  var castPath = _castPath,
      isArguments = isArguments_1,
      isArray$5 = isArray_1,
      isIndex = _isIndex,
      isLength = isLength_1,
      toKey$2 = _toKey;

  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */
  function hasPath$1(object, path, hasFunc) {
    path = castPath(path, object);

    var index = -1,
        length = path.length,
        result = false;

    while (++index < length) {
      var key = toKey$2(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) &&
      (isArray$5(object) || isArguments(object));
  }

  var _hasPath = hasPath$1;

  var baseHasIn = _baseHasIn,
      hasPath = _hasPath;

  /**
   * Checks if `path` is a direct or inherited property of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.hasIn(object, 'a');
   * // => true
   *
   * _.hasIn(object, 'a.b');
   * // => true
   *
   * _.hasIn(object, ['a', 'b']);
   * // => true
   *
   * _.hasIn(object, 'b');
   * // => false
   */
  function hasIn$1(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
  }

  var hasIn_1 = hasIn$1;

  var baseIsEqual = _baseIsEqual,
      get = get_1,
      hasIn = hasIn_1,
      isKey$1 = _isKey,
      isStrictComparable = _isStrictComparable,
      matchesStrictComparable = _matchesStrictComparable,
      toKey$1 = _toKey;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatchesProperty$1(path, srcValue) {
    if (isKey$1(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey$1(path), srcValue);
    }
    return function(object) {
      var objValue = get(object, path);
      return (objValue === undefined && objValue === srcValue)
        ? hasIn(object, path)
        : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
  }

  var _baseMatchesProperty = baseMatchesProperty$1;

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */

  function baseProperty$1(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  var _baseProperty = baseProperty$1;

  var baseGet = _baseGet;

  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyDeep$1(path) {
    return function(object) {
      return baseGet(object, path);
    };
  }

  var _basePropertyDeep = basePropertyDeep$1;

  var baseProperty = _baseProperty,
      basePropertyDeep = _basePropertyDeep,
      isKey = _isKey,
      toKey = _toKey;

  /**
   * Creates a function that returns the value at `path` of a given object.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': 2 } },
   *   { 'a': { 'b': 1 } }
   * ];
   *
   * _.map(objects, _.property('a.b'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
   * // => [1, 2]
   */
  function property$1(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
  }

  var property_1 = property$1;

  var baseMatches = _baseMatches,
      baseMatchesProperty = _baseMatchesProperty,
      identity = identity_1,
      isArray$4 = isArray_1,
      property = property_1;

  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */
  function baseIteratee$2(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value;
    }
    if (value == null) {
      return identity;
    }
    if (typeof value == 'object') {
      return isArray$4(value)
        ? baseMatchesProperty(value[0], value[1])
        : baseMatches(value);
    }
    return property(value);
  }

  var _baseIteratee = baseIteratee$2;

  var arrayFilter = _arrayFilter,
      baseFilter = _baseFilter,
      baseIteratee$1 = _baseIteratee,
      isArray$3 = isArray_1;

  /**
   * Iterates over elements of `collection`, returning an array of all elements
   * `predicate` returns truthy for. The predicate is invoked with three
   * arguments: (value, index|key, collection).
   *
   * **Note:** Unlike `_.remove`, this method returns a new array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   * @see _.reject
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36, 'active': true },
   *   { 'user': 'fred',   'age': 40, 'active': false }
   * ];
   *
   * _.filter(users, function(o) { return !o.active; });
   * // => objects for ['fred']
   *
   * // The `_.matches` iteratee shorthand.
   * _.filter(users, { 'age': 36, 'active': true });
   * // => objects for ['barney']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.filter(users, ['active', false]);
   * // => objects for ['fred']
   *
   * // The `_.property` iteratee shorthand.
   * _.filter(users, 'active');
   * // => objects for ['barney']
   *
   * // Combining several predicates using `_.overEvery` or `_.overSome`.
   * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
   * // => objects for ['fred', 'barney']
   */
  function filter(collection, predicate) {
    var func = isArray$3(collection) ? arrayFilter : baseFilter;
    return func(collection, baseIteratee$1(predicate));
  }

  var filter_1 = filter;

  var ECanvasTextBaseLine;

  (function (ECanvasTextBaseLine) {
    ECanvasTextBaseLine["Bottom"] = "bottom";
    ECanvasTextBaseLine["Top"] = "top";
    ECanvasTextBaseLine["Middle"] = "middle";
  })(ECanvasTextBaseLine || (ECanvasTextBaseLine = {}));

  var EMapMode;

  (function (EMapMode) {
    EMapMode["Pan"] = "PAN";
    EMapMode["MARKER"] = "MARKER";
    EMapMode["Point"] = "POINT";
    EMapMode["Circle"] = "CIRCLE";
    EMapMode["Line"] = "LINE";
    EMapMode["Polyline"] = "POLYLINE";
    EMapMode["Rect"] = "RECT";
    EMapMode["Polygon"] = "POLYGON";
    EMapMode["DrawMask"] = "DRAWMASK";
    EMapMode["ClearMask"] = "CLEARMASK";
    EMapMode["ImageMask"] = "IMAGEMASK";
  })(EMapMode || (EMapMode = {}));

  var EEventType;

  (function (EEventType) {
    EEventType["BoundsChanged"] = "boundsChanged";
    EEventType["FeatureSelected"] = "featureSelected";
    EEventType["FeatureUnselected"] = "featureUnselected";
    EEventType["DrawDone"] = "drawDone";
    EEventType["FeatureUpdated"] = "featureUpdated";
    EEventType["FeatureDeleted"] = "featureDeleted";
  })(EEventType || (EEventType = {}));

  var ECursorType;

  (function (ECursorType) {
    ECursorType["Grab"] = "-webkit-grab";
    ECursorType["Grabbing"] = "-webkit-grabbing";
    ECursorType["Crosshair"] = "crosshair";
    ECursorType["Pointer"] = "pointer";
    ECursorType["Move"] = "move";
    ECursorType["NESW_Resize"] = "nesw-resize";
    ECursorType["NWSE_Resize"] = "nwse-resize";
  })(ECursorType || (ECursorType = {}));

  var baseEach = _baseEach,
      isArrayLike$2 = isArrayLike_1;

  /**
   * The base implementation of `_.map` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function baseMap$1(collection, iteratee) {
    var index = -1,
        result = isArrayLike$2(collection) ? Array(collection.length) : [];

    baseEach(collection, function(value, key, collection) {
      result[++index] = iteratee(value, key, collection);
    });
    return result;
  }

  var _baseMap = baseMap$1;

  var arrayMap$1 = _arrayMap,
      baseIteratee = _baseIteratee,
      baseMap = _baseMap,
      isArray$2 = isArray_1;

  /**
   * Creates an array of values by running each element in `collection` thru
   * `iteratee`. The iteratee is invoked with three arguments:
   * (value, index|key, collection).
   *
   * Many lodash methods are guarded to work as iteratees for methods like
   * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
   *
   * The guarded methods are:
   * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
   * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
   * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
   * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * _.map([4, 8], square);
   * // => [16, 64]
   *
   * _.map({ 'a': 4, 'b': 8 }, square);
   * // => [16, 64] (iteration order is not guaranteed)
   *
   * var users = [
   *   { 'user': 'barney' },
   *   { 'user': 'fred' }
   * ];
   *
   * // The `_.property` iteratee shorthand.
   * _.map(users, 'user');
   * // => ['barney', 'fred']
   */
  function map(collection, iteratee) {
    var func = isArray$2(collection) ? arrayMap$1 : baseMap;
    return func(collection, baseIteratee(iteratee));
  }

  var map_1 = map;

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */

  function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  var _baseFindIndex = baseFindIndex$1;

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */

  function baseIsNaN$1(value) {
    return value !== value;
  }

  var _baseIsNaN = baseIsNaN$1;

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */

  function strictIndexOf$1(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  var _strictIndexOf = strictIndexOf$1;

  var baseFindIndex = _baseFindIndex,
      baseIsNaN = _baseIsNaN,
      strictIndexOf = _strictIndexOf;

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf$2(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  var _baseIndexOf = baseIndexOf$2;

  var baseGetTag = _baseGetTag,
      isArray$1 = isArray_1,
      isObjectLike$2 = isObjectLike_1;

  /** `Object#toString` result references. */
  var stringTag$2 = '[object String]';

  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString$1(value) {
    return typeof value == 'string' ||
      (!isArray$1(value) && isObjectLike$2(value) && baseGetTag(value) == stringTag$2);
  }

  var isString_1 = isString$1;

  /** Used to match a single whitespace character. */

  var reWhitespace = /\s/;

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex$1(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  var _trimmedEndIndex = trimmedEndIndex$1;

  var trimmedEndIndex = _trimmedEndIndex;

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim$1(string) {
    return string
      ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      : string;
  }

  var _baseTrim = baseTrim$1;

  var baseTrim = _baseTrim,
      isObject$3 = isObject_1,
      isSymbol = isSymbol_1;

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber$1(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject$3(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject$3(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var toNumber_1 = toNumber$1;

  var toNumber = toNumber_1;

  /** Used as references for various `Number` constants. */
  var INFINITY$1 = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308;

  /**
   * Converts `value` to a finite number.
   *
   * @static
   * @memberOf _
   * @since 4.12.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted number.
   * @example
   *
   * _.toFinite(3.2);
   * // => 3.2
   *
   * _.toFinite(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toFinite(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toFinite('3.2');
   * // => 3.2
   */
  function toFinite$1(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY$1 || value === -INFINITY$1) {
      var sign = (value < 0 ? -1 : 1);
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }

  var toFinite_1 = toFinite$1;

  var toFinite = toFinite_1;

  /**
   * Converts `value` to an integer.
   *
   * **Note:** This method is loosely based on
   * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toInteger(3.2);
   * // => 3
   *
   * _.toInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toInteger(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toInteger('3.2');
   * // => 3
   */
  function toInteger$1(value) {
    var result = toFinite(value),
        remainder = result % 1;

    return result === result ? (remainder ? result - remainder : result) : 0;
  }

  var toInteger_1 = toInteger$1;

  var arrayMap = _arrayMap;

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues$1(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  var _baseValues = baseValues$1;

  var baseValues = _baseValues,
      keys$2 = keys_1;

  /**
   * Creates an array of the own enumerable string keyed property values of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property values.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.values(new Foo);
   * // => [1, 2] (iteration order is not guaranteed)
   *
   * _.values('hi');
   * // => ['h', 'i']
   */
  function values$1(object) {
    return object == null ? [] : baseValues(object, keys$2(object));
  }

  var values_1 = values$1;

  var baseIndexOf$1 = _baseIndexOf,
      isArrayLike$1 = isArrayLike_1,
      isString = isString_1,
      toInteger = toInteger_1,
      values = values_1;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;

  /**
   * Checks if `value` is in `collection`. If `collection` is a string, it's
   * checked for a substring of `value`, otherwise
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * is used for equality comparisons. If `fromIndex` is negative, it's used as
   * the offset from the end of `collection`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object|string} collection The collection to inspect.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=0] The index to search from.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
   * @returns {boolean} Returns `true` if `value` is found, else `false`.
   * @example
   *
   * _.includes([1, 2, 3], 1);
   * // => true
   *
   * _.includes([1, 2, 3], 1, 2);
   * // => false
   *
   * _.includes({ 'a': 1, 'b': 2 }, 1);
   * // => true
   *
   * _.includes('abcd', 'bc');
   * // => true
   */
  function includes(collection, value, fromIndex, guard) {
    collection = isArrayLike$1(collection) ? collection : values(collection);
    fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

    var length = collection.length;
    if (fromIndex < 0) {
      fromIndex = nativeMax(length + fromIndex, 0);
    }
    return isString(collection)
      ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
      : (!!length && baseIndexOf$1(collection, value, fromIndex) > -1);
  }

  var includes_1 = includes;

  // 涂抹action类型
  var EMaskActionType;

  (function (EMaskActionType) {
    EMaskActionType["Draw"] = "DRAW";
    EMaskActionType["Clear"] = "CLEAR";
    EMaskActionType["Image"] = "IMAGE";
  })(EMaskActionType || (EMaskActionType = {}));

  var Action = /*#__PURE__*/function () {
    // actionId
    // actionType
    // props
    // 对象空间数据结构

    /**
     * props: action样式
     * defaultStyle: 默认配置项
     * style: userFeatureStyle merge defaultStyle
    */
    // function: constructor
    function Action(id, type) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, Action);

      this.id = id;
      this.type = type;
      this.props = props;
      this.style = assign_1({}, Action.defaultStyle, style);
    } // function: trigger when feature add to featureLayer


    _createClass(Action, [{
      key: "onAdd",
      value: function onAdd(layer) {
        this.layer = layer;
        this.refresh();
      } // trigger when action remove from layer
      // layer exits first

    }, {
      key: "onRemove",
      value: function onRemove() {} // 改变样式

    }, {
      key: "setStyle",
      value: function setStyle(style, option) {
        var _this$layer;

        var _option$refresh = option.refresh,
            refresh = _option$refresh === void 0 ? true : _option$refresh;
        this.style = style;
        refresh && ((_this$layer = this.layer) === null || _this$layer === void 0 ? void 0 : _this$layer.refresh());
      } // 刷新当前数据

    }, {
      key: "refresh",
      value: function refresh() {} // 打印测试输出

    }, {
      key: "printInfo",
      value: function printInfo() {}
    }]);

    return Action;
  }();

  _defineProperty$1(Action, "defaultStyle", {
    opacity: 1,
    fillStyle: 'rgba(255, 0, 0, 0)',
    lineWidth: 1,
    strokeStyle: '#000' // 边框颜色

  });

  var Layer$1 = /*#__PURE__*/function () {
    // layerId
    // layerType
    // props
    // props: domId

    /**
     * props: map可选配置项
     * defaultMapOptions: 默认配置项
     * mapOptions: userMapOptions merge defaultMapOptions
    */
    // function: constructor
    function Layer(id, type) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, Layer);

      this.id = id;
      this.type = type;
      this.props = props;
      this.style = assign_1({}, Layer.defaultStyle, style);
      this.domId = "layer-".concat(id, "-wrapper");
      this.setDom();
    } // 创建容器dom元素div


    _createClass(Layer, [{
      key: "setDom",
      value: function setDom() {
        if (!this.dom) {
          this.dom = document.createElement('div');
          this.dom.setAttribute('id', this.domId);
          this.dom.style.position = 'absolute';
          this.dom.style.left = '0';
          this.dom.style.top = '0';
        }

        var _this$style = this.style,
            zIndex = _this$style.zIndex,
            opacity = _this$style.opacity;
        this.dom.style.zIndex = "".concat(zIndex);
        this.dom.style.opacity = "".concat(opacity);
      } // function: trigger when layer add to map

    }, {
      key: "onAdd",
      value: function onAdd(map) {
        // 首先判断当前layer是否已经被添加至map对象中
        this.map = map;
        this.resize();
      } // trigger when layer remove from map
      // map exits first

    }, {
      key: "onRemove",
      value: function onRemove() {
        var layerElement = document.getElementById(this.domId);
        layerElement && layerElement.remove();
      } // 当容器变化时，需要调用触发
      // 以来map:getSize大小进行当前layer的resize

    }, {
      key: "resize",
      value: function resize() {
        var _this$map$getSize = this.map.getSize(),
            width = _this$map$getSize.width,
            height = _this$map$getSize.height;

        this.dom.style.width = "".concat(width, "px");
        this.dom.style.height = "".concat(height, "px");
      } // 刷新当前数据
      // 各子类各自实现

    }, {
      key: "refresh",
      value: function refresh() {} // 重新resize和刷新

    }, {
      key: "resizeAndRefresh",
      value: function resizeAndRefresh() {
        this.resize();
        this.refresh();
      } // 打印测试输出

    }, {
      key: "printInfo",
      value: function printInfo() {}
    }]);

    return Layer;
  }();

  _defineProperty$1(Layer$1, "defaultStyle", {
    zIndex: 1,
    opacity: 1.0
  });

  var CanvasLayer = /*#__PURE__*/function (_Layer) {
    _inherits(CanvasLayer, _Layer);

    var _super = _createSuper(CanvasLayer);

    // function: constructor
    function CanvasLayer(id, layerType) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, CanvasLayer);

      return _super.call(this, id, layerType, props, style);
    }

    _createClass(CanvasLayer, [{
      key: "onAdd",
      value: function onAdd(map) {
        _get(_getPrototypeOf(CanvasLayer.prototype), "onAdd", this).call(this, map);

        this.createRenderCanvas();
      } // 创建canvas层

    }, {
      key: "createRenderCanvas",
      value: function createRenderCanvas() {
        var _this$map$getSize = this.map.getSize(),
            width = _this$map$getSize.width,
            height = _this$map$getSize.height;

        var canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.left = '0';
        canvas.style.top = '0';
        canvas.width = width * CanvasLayer.dpr;
        canvas.height = height * CanvasLayer.dpr;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        this.dom.appendChild(canvas); // canvas上下文赋值

        this.canvas = canvas;
        this.canvasContext = canvas.getContext('2d');
      } // @override

    }, {
      key: "refresh",
      value: function refresh() {
        _get(_getPrototypeOf(CanvasLayer.prototype), "refresh", this).call(this); // 进行canvas画布清除


        this.clear();
      } // 清空canvas画布

    }, {
      key: "clear",
      value: function clear() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }]);

    return CanvasLayer;
  }(Layer$1);

  _defineProperty$1(CanvasLayer, "dpr", window.devicePixelRatio);

  var Graphic = /*#__PURE__*/function () {
    function Graphic() {
      _classCallCheck(this, Graphic);
    }

    _createClass(Graphic, null, [{
      key: "setStyle",
      value: // 需要进行dpr转换的样式属性
      // 设置canvas-style
      function setStyle(ctx) {
        var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var fullStyle = assign_1({}, Graphic.defaultStyle, style);

        forEach_1(fullStyle, function (value, key) {
          if (isFunction_1(Graphic.formatStyle[key])) {
            var dprValue = Graphic.formatStyle[key](value);
            ctx[key] = dprValue;
          } else {
            ctx[key] = value;
          }
        });
      } // 多段线绘制

    }, {
      key: "drawPolyline",
      value: function drawPolyline(ctx, shape, style, option) {
        var format = option.format,
            _option$limitCount = option.limitCount,
            limitCount = _option$limitCount === void 0 ? 2 : _option$limitCount;
        var formatShape = isFunction_1(format) ? format(shape) : shape;
        var points = formatShape.points,
            width = formatShape.width;
        var pointsLength = points.length; // 校验

        if (pointsLength < limitCount) {
          return;
        }

        Graphic.setStyle(ctx, style);
        isNumber_1(width) && (ctx.lineWidth = width); // 绘制

        ctx.beginPath();
        var _points$ = points[0],
            startX = _points$.x,
            startY = _points$.y;
        ctx.moveTo(startX, startY); // 设置起点

        for (var i = 1; i < pointsLength; i++) {
          var _points$i = points[i],
              middleX = _points$i.x,
              middleY = _points$i.y;
          ctx.lineTo(middleX, middleY);
        }

        ctx.stroke();
      } // 线绘制

    }, {
      key: "drawLine",
      value: function drawLine(ctx, shape, style, option) {
        Graphic.setStyle(ctx, style);

        var _ref = option || {},
            format = _ref.format;

        var formatShape = isFunction_1(format) ? format(shape) : shape;
        var start = formatShape.start,
            end = formatShape.end,
            width = formatShape.width;
        isNumber_1(width) && (ctx.lineWidth = width);
        ctx.beginPath();
        ctx.moveTo(start.x, start.y); // 设置起点

        ctx.lineTo(end.x, end.y);
        ctx.stroke();
      } // 矩形绘制

    }, {
      key: "drawRect",
      value: function drawRect(ctx, shape, style, option) {
        var _ref2 = option || {},
            format = _ref2.format,
            _ref2$fill = _ref2.fill,
            fill = _ref2$fill === void 0 ? false : _ref2$fill,
            _ref2$stroke = _ref2.stroke,
            stroke = _ref2$stroke === void 0 ? true : _ref2$stroke;

        var formatShape = isFunction_1(format) ? format(shape) : shape;
        var startX = formatShape.x,
            startY = formatShape.y,
            width = formatShape.width,
            height = formatShape.height;
        var endX = startX + width;
        var endY = startY + height; // 矩形点

        var rectPoints = [{
          x: startX,
          y: startY
        }, {
          x: endX,
          y: startY
        }, {
          x: endX,
          y: endY
        }, {
          x: startX,
          y: endY
        }];
        Graphic.drawPolygon(ctx, rectPoints, style, {
          fill: fill,
          stroke: stroke
        });
      } // 多边形绘制

    }, {
      key: "drawPolygon",
      value: function drawPolygon(ctx, points, style, option) {
        var format = option.format,
            _option$stroke = option.stroke,
            stroke = _option$stroke === void 0 ? true : _option$stroke,
            _option$fill = option.fill,
            fill = _option$fill === void 0 ? false : _option$fill,
            _option$limitCount2 = option.limitCount,
            limitCount = _option$limitCount2 === void 0 ? 2 : _option$limitCount2,
            _option$closePath = option.closePath,
            closePath = _option$closePath === void 0 ? true : _option$closePath; // 校验

        var pointsLength = points.length;

        if (pointsLength < limitCount) {
          return;
        }

        Graphic.setStyle(ctx, style); // 绘制

        ctx.beginPath();

        var _ref3 = isFunction_1(format) ? format(points[0]) : points[0],
            startX = _ref3.x,
            startY = _ref3.y;

        ctx.moveTo(startX, startY); // 设置起点

        for (var i = 1; i < pointsLength; i++) {
          var _ref4 = isFunction_1(format) ? format(points[i]) : points[i],
              middleX = _ref4.x,
              middleY = _ref4.y;

          ctx.lineTo(middleX, middleY);
        }

        closePath && ctx.closePath(); // 是否闭合

        fill && ctx.fill();
        stroke && ctx.stroke();
      } // 圆绘制

    }, {
      key: "drawCircle",
      value: function drawCircle(ctx, shape, style, option) {
        var format = option.format,
            _option$stroke2 = option.stroke,
            stroke = _option$stroke2 === void 0 ? true : _option$stroke2,
            _option$fill2 = option.fill,
            fill = _option$fill2 === void 0 ? true : _option$fill2;
        var formatShape = isFunction_1(format) ? format(shape) : shape;
        var cx = formatShape.cx,
            cy = formatShape.cy,
            r = formatShape.r;
        Graphic.setStyle(ctx, style);
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, 2 * Math.PI);
        fill && ctx.fill();
        stroke && ctx.stroke();
      } // 绘制点

    }, {
      key: "drawPoint",
      value: function drawPoint(ctx, shape, style, option) {
        var format = option.format;
        var formatShape = isFunction_1(format) ? format(shape) : shape;
        var x = formatShape.x,
            y = formatShape.y,
            _formatShape$r = formatShape.r,
            r = _formatShape$r === void 0 ? 2 : _formatShape$r;
        Graphic.setStyle(ctx, style);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
      } // 图片绘制

    }, {
      key: "drawImage",
      value: function drawImage(ctx, imageInfo, option) {
        var image = imageInfo.image,
            x = imageInfo.x,
            y = imageInfo.y,
            width = imageInfo.width,
            height = imageInfo.height;
        ctx.drawImage(image, x, y, width, height);
      } // 文本绘制

    }, {
      key: "drawText",
      value: function drawText(ctx, textInfo, style, option) {
        var withBackground = style.background;
        var format = option.format,
            _option$fill3 = option.fill,
            fill = _option$fill3 === void 0 ? true : _option$fill3;
        var formatTextInfo = isFunction_1(format) ? format(textInfo) : textInfo;
        var text = formatTextInfo.text,
            position = formatTextInfo.position,
            offset = formatTextInfo.offset;
        Graphic.setStyle(ctx, style);
        var x = position.x + offset.x;
        var y = position.y - offset.y;
        var lineWidth = ctx.lineWidth;
        var paddingVertical = 3 * CanvasLayer.dpr;
        var paddingHorizontal = 4 * CanvasLayer.dpr;
        var isBottom = ctx.textBaseline === ECanvasTextBaseLine.Bottom;
        var isTop = ctx.textBaseline === ECanvasTextBaseLine.Top;
        var isMiddle = ctx.textBaseline === ECanvasTextBaseLine.Middle;

        if (withBackground) {
          // 绘制容器矩形
          var textWidth = ctx.measureText(text).width;
          var fontSize = parseInt(ctx.font.replace(/[^0-9]/ig, ''), 10);
          var width = textWidth + paddingHorizontal * 2;
          var height = fontSize + paddingVertical * 2;
          var rectLTY = position.y;
          isBottom && (rectLTY = rectLTY - height);
          isTop && (rectLTY = rectLTY); // 不同更换Y坐标

          isMiddle && (rectLTY = rectLTY - height / 2); // 不同更换Y坐标

          var rectShape = {
            x: position.x + offset.x,
            y: rectLTY - offset.y,
            width: width,
            height: height
          };
          Graphic.drawRect(ctx, rectShape, style, {
            fill: true
          });
        } // 执行文本绘制


        ctx.globalAlpha = 1; // 字体不能设置透明

        if (fill) {
          ctx.fillStyle = style.fontColor;
          isBottom && withBackground && ctx.fillText(text, x + paddingHorizontal, y - paddingVertical + lineWidth);
          isMiddle && withBackground && ctx.fillText(text, x + paddingHorizontal, y);
          isTop && withBackground && ctx.fillText(text, x + paddingHorizontal, y + paddingVertical + lineWidth);
          !withBackground && ctx.fillText(text, x, y);
        } else {
          ctx.strokeStyle = style.fontColor;
          isBottom && withBackground && ctx.strokeText(text, x + paddingHorizontal, y - paddingVertical + lineWidth);
          isMiddle && withBackground && ctx.strokeText(text, x + paddingHorizontal, y);
          isTop && withBackground && ctx.strokeText(text, x + paddingHorizontal, y + paddingVertical + lineWidth);
          !withBackground && ctx.strokeText(text, x, y);
        }
      }
    }]);

    return Graphic;
  }();

  _defineProperty$1(Graphic, "defaultStyle", {
    fillStyle: '#FF0000',
    strokeStyle: '#FF0000',
    lineWidth: 1,
    font: 'normal 12px Arial',
    globalAlpha: 1,
    lineCap: 'round',
    lineJoin: 'round',
    shadowOffsetX: 0,
    // 阴影Y轴偏移
    shadowOffsetY: 0,
    // 阴影X轴偏移
    shadowBlur: 0 // 模糊尺寸

  });

  _defineProperty$1(Graphic, "formatStyle", {
    'lineWidth': function lineWidth(value) {
      return value * CanvasLayer.dpr;
    },
    'font': function font(value) {
      var fontSize = value.replace(/[^0-9]/ig, '');
      var newFontSize = parseInt(fontSize, 10) * CanvasLayer.dpr;
      var reg = new RegExp("".concat(fontSize), 'g');
      var newValue = value.replace(reg, "".concat(newFontSize));
      return newValue;
    }
  });

  var ClearActionFeature = /*#__PURE__*/function (_Action) {
    _inherits(ClearActionFeature, _Action);

    var _super = _createSuper(ClearActionFeature);

    // function: constructor
    function ClearActionFeature(id, shape) {
      var _this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, ClearActionFeature);

      _this = _super.call(this, id, EMaskActionType.Clear, props, style);
      _this.shape = shape;
      return _this;
    } // 执行绘制当前
    // @override


    _createClass(ClearActionFeature, [{
      key: "refresh",
      value: function refresh() {
        var _this2 = this;

        // 执行坐标转换
        var dpr = CanvasLayer.dpr;
        var scale = this.layer.map.getScale(); // 设置倒圆角

        var formateStyle = _objectSpread2(_objectSpread2({}, this.style || {}), {}, {
          lineCap: 'round',
          lineJoin: 'round'
        });

        this.layer.canvasContext.globalCompositeOperation = 'destination-out';
        Graphic.drawPolyline(this.layer.canvasContext, this.shape, formateStyle, {
          format: function format(shape) {
            var points = shape.points,
                width = shape.width;
            return _objectSpread2({
              points: map_1(points, function (point) {
                var _this2$layer$map$tran = _this2.layer.map.transformGlobalToScreen(point),
                    screenX = _this2$layer$map$tran.x,
                    screenY = _this2$layer$map$tran.y;

                return {
                  x: screenX * dpr,
                  y: screenY * dpr
                };
              })
            }, isNumber_1(width) ? {
              width: width * scale * dpr
            } : {});
          }
        });
        this.layer.canvasContext.globalCompositeOperation = 'source-over';
      }
    }]);

    return ClearActionFeature;
  }(Action);

  // 图层类型
  var ELayerType;

  (function (ELayerType) {
    ELayerType["Image"] = "IMAGE";
    ELayerType["Feature"] = "FEATURE";
    ELayerType["Event"] = "EVENT";
    ELayerType["Mask"] = "MASK";
    ELayerType["Text"] = "TEXT";
    ELayerType["Marker"] = "MARKER";
    ELayerType["Overlay"] = "OVERLAY";
  })(ELayerType || (ELayerType = {}));

  // Feature对象类型
  var EFeatureType;

  (function (EFeatureType) {
    EFeatureType["Point"] = "POINT";
    EFeatureType["Line"] = "LINE";
    EFeatureType["Polyline"] = "POLYLINE";
    EFeatureType["Polygon"] = "POLYGON";
    EFeatureType["Rect"] = "RECT";
    EFeatureType["Circle"] = "CIRCLE";
  })(EFeatureType || (EFeatureType = {}));

  var EFeatureCircleSubtype;

  (function (EFeatureCircleSubtype) {
    EFeatureCircleSubtype["Global"] = "GLOBAL";
    EFeatureCircleSubtype["Screen"] = "SCREEN";
  })(EFeatureCircleSubtype || (EFeatureCircleSubtype = {}));

  var Util = function Util() {
    _classCallCheck(this, Util);
  };

  _defineProperty$1(Util, "MathUtil", {
    // 获取亮点之间的中心点
    getMiddlePoint: function getMiddlePoint(start, end) {
      var x1 = start.x,
          y1 = start.y;
      var x2 = end.x,
          y2 = end.y;
      var middleX = (x1 + x2) / 2;
      var middleY = (y1 + y2) / 2;
      return {
        x: middleX,
        y: middleY
      };
    },
    // 计算两端之间的距离
    distance: function distance(start, end) {
      var x1 = start.x,
          y1 = start.y;
      var x2 = end.x,
          y2 = end.y;
      var dltX = x1 - x2;
      var dltY = y1 - y2;
      return Math.sqrt(dltX * dltX + dltY * dltY);
    },
    // 计算两端之间的距离
    pointInPolygon: function pointInPolygon(point, polygon) {
      var x = point.x,
          y = point.y;

      for (var c = false, i = -1, l = polygon.length, j = l - 1; ++i < l; j = i) {
        var _polygon$i = polygon[i],
            xi = _polygon$i.x,
            yi = _polygon$i.y;
        var _polygon$j = polygon[j],
            xj = _polygon$j.x,
            yj = _polygon$j.y;
        (yi <= y && y < yj || yj <= y && y < yi) && x < (xj - xi) * (y - yi) / (yj - yi) + xi && (c = !c);
      }

      return c;
    },
    pointInRect: function pointInRect(point, rect) {
      var x = point.x,
          y = point.y;
      var startX = rect.x,
          startY = rect.y,
          width = rect.width,
          height = rect.height;
      var endX = startX + width;
      var endY = startY - height;
      return x >= startX && x <= endX && y >= endY && y <= startY;
    },
    pointInPoint: function pointInPoint(point, point2) {
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var tolerance = option.tolerance;
      var distance = Util.MathUtil.distance(point, point2);
      return distance <= tolerance;
    },
    pointInPolyline: function pointInPolyline(pt, points) {
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var tolerance = option.tolerance;
      var maxIndex = points.length - 1;
      var result = false;

      forEach_1(points, function (point, index) {
        if (index === maxIndex) {
          return;
        }

        var nextPoint = points[index + 1];
        var distance = Util.MathUtil.distancePoint2Line(pt, point, nextPoint);

        if (distance <= tolerance) {
          result = true;
          return false;
        }
      });

      return result;
    },
    // 计算点到线段的最短距离
    distancePoint2Line: function distancePoint2Line(pt, point1, point2) {
      var x = pt.x,
          y = pt.y;
      var x1 = point1.x,
          y1 = point1.y;
      var x2 = point2.x,
          y2 = point2.y;
      var A = x - x1;
      var B = y - y1;
      var C = x2 - x1;
      var D = y2 - y1;
      var dot = A * C + B * D;
      var lineLength = C * C + D * D;
      var param = -1;

      if (lineLength !== 0) {
        // 线段长度不能为0
        param = dot / lineLength;
      }

      var xx;
      var yy;

      if (param < 0) {
        xx = x1;
        yy = y1;
      } else if (param > 1) {
        xx = x2;
        yy = y2;
      } else {
        xx = x1 + param * C;
        yy = y1 + param * D;
      }

      var dx = x - xx;
      var dy = y - yy;
      return Math.sqrt(dx * dx + dy * dy);
    }
  });

  _defineProperty$1(Util, "EventUtil", {
    // 获取鼠标左右键
    getButtonIndex: function getButtonIndex(event) {
      if (!+[1]) {
        switch (event.button) {
          case 0:
          case 1:
          case 3:
          case 5:
          case 7:
            return 0;

          case 2:
          case 6:
            return 2;

          case 4:
            return 1;
        }
      }

      return event.button;
    }
  });

  var MaskLayer$1 = /*#__PURE__*/function (_Layer) {
    _inherits(MaskLayer, _Layer);

    var _super = _createSuper(MaskLayer);

    // 实时记录鼠标的位置
    // mouseDown坐标{screen:IPoint: 相对容器左上角坐标, globalPoint}
    //  mouseDown坐标：相对页面左上角的坐标
    // 标记是否处于dragging拖拽状态
    // 多边形绘制时临时保存points：IBasePoint[]
    // 当存在activeFeature时，鼠标move过程中捕捉到的feature
    // 当存在activeFeature时，鼠标move过程中捕捉到的feature节点index
    // 0 0.5 1 1.5 ：存在x.5时，代表的是x & x+1 的中间节点
    // function: constructor
    function MaskLayer(id) {
      var _this;

      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, MaskLayer);

      _this = _super.call(this, id, ELayerType.Event, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "dragging", false);

      _defineProperty$1(_assertThisInitialized(_this), "tmpPointsStore", []);

      _defineProperty$1(_assertThisInitialized(_this), "hoverFeature", null);

      _defineProperty$1(_assertThisInitialized(_this), "hoverFeatureIndex", undefined);

      _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
      _this.onMouseMove = _this.onMouseMove.bind(_assertThisInitialized(_this));
      _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this));
      _this.onMouseDblClick = _this.onMouseDblClick.bind(_assertThisInitialized(_this));
      _this.onMouseWheel = _this.onMouseWheel.bind(_assertThisInitialized(_this));
      _this.handleMapPanMove = _this.handleMapPanMove.bind(_assertThisInitialized(_this));
      _this.handleMapPanEnd = _this.handleMapPanEnd.bind(_assertThisInitialized(_this));
      _this.handleRectMove = _this.handleRectMove.bind(_assertThisInitialized(_this));
      _this.handleRectEnd = _this.handleRectEnd.bind(_assertThisInitialized(_this));
      _this.handlePolygonMove = _this.handlePolygonMove.bind(_assertThisInitialized(_this));
      _this.handleMaskMove = _this.handleMaskMove.bind(_assertThisInitialized(_this));
      _this.handleMaskEnd = _this.handleMaskEnd.bind(_assertThisInitialized(_this));
      _this.handleActiveFeatureMove = _this.handleActiveFeatureMove.bind(_assertThisInitialized(_this));
      _this.handleActiveFeatureEnd = _this.handleActiveFeatureEnd.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(MaskLayer, [{
      key: "onAdd",
      value: function onAdd(map) {
        _get(_getPrototypeOf(MaskLayer.prototype), "onAdd", this).call(this, map);

        this.createEventDom();
        this.dom.appendChild(this.eventDom); // 事件绑定

        this.addEventListener();
      } // 创建mask层

    }, {
      key: "createEventDom",
      value: function createEventDom() {
        this.eventDom = document.createElement('div');
        this.eventDom.style.position = 'absolute';
        this.eventDom.style.left = '0';
        this.eventDom.style.right = '0';
        this.eventDom.style.top = '0';
        this.eventDom.style.bottom = '0';
        this.eventDom.style.zIndex = '1'; // 阻止拖拽默认事件

        this.eventDom.ondragstart = function (e) {
          e.preventDefault();
          e.stopPropagation();
        };
      } // addEventListener: 初始化容器事件绑定

    }, {
      key: "addEventListener",
      value: function addEventListener() {
        this.eventDom.addEventListener("mousedown", this.onMouseDown);
        this.eventDom.addEventListener("mousemove", this.onMouseMove);
        this.eventDom.addEventListener("mouseup", this.onMouseUp);
        this.eventDom.addEventListener('dblclick', this.onMouseDblClick);
        this.eventDom.addEventListener("mousewheel", this.onMouseWheel);
      } // removeEventListener: 事件解除

    }, {
      key: "removeEventListener",
      value: function removeEventListener() {
        this.eventDom.removeEventListener("mousedown", this.onMouseDown);
        this.eventDom.removeEventListener("mousemove", this.onMouseMove);
        this.eventDom.removeEventListener("mouseup", this.onMouseUp);
        this.eventDom.removeEventListener("mousewheel", this.onMouseWheel);
      }
      /*************************************************/

      /*************** map 平移 *************************/

      /*************************************************/
      // map平移开始

    }, {
      key: "handleMapPanStart",
      value: function handleMapPanStart(e) {
        this.dragging = true; // 鼠标按下态

        this.map.setCursor(ECursorType.Grabbing);
        document.onmousemove = this.handleMapPanMove;
        document.onmouseup = this.handleMapPanEnd;
      } // map平移中

    }, {
      key: "handleMapPanMove",
      value: function handleMapPanMove(e) {
        var _this$getDltXY = this.getDltXY(e),
            dltX = _this$getDltXY.x,
            dltY = _this$getDltXY.y;

        this.map.onDrag(dltX, dltY);
      } // map平移结束

    }, {
      key: "handleMapPanEnd",
      value: function handleMapPanEnd(e) {
        this.dragging = false; // 鼠标抬起

        this.map.setCursor(ECursorType.Grab);
        document.onmousemove = null;
        document.onmouseup = null; // 计算偏移量

        var _this$getDltXY2 = this.getDltXY(e),
            dltX = _this$getDltXY2.x,
            dltY = _this$getDltXY2.y;

        var _this$map$getScreenCe = this.map.getScreenCenter(),
            screenCenterX = _this$map$getScreenCe.x,
            screenCenterY = _this$map$getScreenCe.y; // 计算待更新的屏幕中心点坐标


        var newScreenCenterX = screenCenterX - dltX;
        var newScreenCenterY = screenCenterY - dltY; // 新的屏幕坐标转换为实际坐标值

        var newCenter = this.map.transformScreenToGlobal({
          x: newScreenCenterX,
          y: newScreenCenterY
        }); // 将map中相关元素复位，然后进行刷新

        this.map.reset().setCenter(newCenter);
      } // 获取pageScreenPoint相对startPageScreenPoint偏移量

    }, {
      key: "getDltXY",
      value: function getDltXY(e, option) {
        var _ref = option || {},
            _ref$transform = _ref.transform,
            transform = _ref$transform === void 0 ? false : _ref$transform;

        var scale = this.map.getScale();
        var screenX = e.screenX,
            screenY = e.screenY;
        var _this$startPageScreen = this.startPageScreenPoint,
            x = _this$startPageScreen.x,
            y = _this$startPageScreen.y;
        var screenDltX = screenX - x;
        var screenDltY = screenY - y;
        var globalDltX = screenDltX / scale;
        var globalDltY = screenDltY / scale;
        return {
          x: transform ? globalDltX : screenDltX,
          y: transform ? globalDltY : screenDltY
        };
      }
    }, {
      key: "clearDownTimer",
      value: function clearDownTimer() {
        if (this.downTimer) {
          window.clearTimeout(this.downTimer);
          this.downTimer = null;
        }
      }
      /*****************************************************/

      /*************** map 注记绘制 *************************/

      /*****************************************************/

    }, {
      key: "handleMarkerStart",
      value: function handleMarkerStart(e) {
        var _this2 = this;

        this.clearDownTimer();
        this.downTimer = window.setTimeout(function () {
          _this2.map.eventsObServer.emit(EEventType.DrawDone, _this2.map.mode, {
            x: _this2.startPoint.global.x,
            y: _this2.startPoint.global.y
          });
        }, 300);
      }
      /*****************************************************/

      /*************** map 点 *************************/

      /*****************************************************/

    }, {
      key: "handlePointStart",
      value: function handlePointStart(e) {
        var _this3 = this;

        this.clearDownTimer();
        this.downTimer = window.setTimeout(function () {
          _this3.map.eventsObServer.emit(EEventType.DrawDone, _this3.map.mode, {
            x: _this3.startPoint.global.x,
            y: _this3.startPoint.global.y
          });

          _this3.reset(); // 重置

        }, 300);
      }
      /*****************************************************/

      /*************** map 矩形绘制 *************************/

      /*****************************************************/

    }, {
      key: "handleCircleStart",
      value: function handleCircleStart(e) {
        var _this4 = this;

        this.dragging = true; // 鼠标按下态

        document.onmousemove = function (e) {
          return _this4.handleCircleMove(e);
        };

        document.onmouseup = function (e) {
          return _this4.handleCircleEnd(e);
        };

        var global = this.startPoint.global;
        this.map.overlayLayer.addText({
          text: '拖动改变圆大小',
          position: global
        }, {
          clear: true
        });
      }
    }, {
      key: "handleCircleMove",
      value: function handleCircleMove(e) {
        var global = this.startPoint.global;

        var _this$getDltXY3 = this.getDltXY(e, {
          transform: true
        }),
            globalDltX = _this$getDltXY3.x,
            globalDltY = _this$getDltXY3.y;

        var _this$getDltXY4 = this.getDltXY(e, {
          transform: false
        }),
            screenDltX = _this$getDltXY4.x,
            screenDltY = _this$getDltXY4.y;

        var screenDlt = Math.sqrt(screenDltX * screenDltX + screenDltY * screenDltY);
        var moveGlobal = {
          x: global.x + globalDltX,
          y: global.y - globalDltY
        };
        var circleShape = {
          cx: global.x,
          cy: global.y,
          sr: screenDlt,
          stroke: true,
          fill: false
        };
        this.map.overlayLayer.addCircleFeature(circleShape);
        this.map.overlayLayer.addText({
          text: '抬起完成绘制',
          position: moveGlobal
        }, {
          clear: false
        });
      }
    }, {
      key: "handleCircleEnd",
      value: function handleCircleEnd(e) {
        this.dragging = false; // 鼠标抬起

        document.onmousemove = null;
        document.onmouseup = null;
        var _this$startPoint$glob = this.startPoint.global,
            centerX = _this$startPoint$glob.x,
            centerY = _this$startPoint$glob.y;

        var _this$getDltXY5 = this.getDltXY(e, {
          transform: true
        }),
            globalDltX = _this$getDltXY5.x,
            globalDltY = _this$getDltXY5.y;

        var _this$getDltXY6 = this.getDltXY(e, {
          transform: false
        }),
            screenDltX = _this$getDltXY6.x,
            screenDltY = _this$getDltXY6.y;

        var globalDlt = Math.sqrt(globalDltX * globalDltX + globalDltY * globalDltY);
        var screenDlt = Math.sqrt(screenDltX * screenDltX + screenDltY * screenDltY);
        this.reset(); // 重置临时数据
        // rect矩形有效性判读是否合适

        if (Math.abs(globalDlt) <= 0 || Math.abs(screenDlt) <= 0) {
          console.warn('the circle is too small...');
          return;
        } // 组织矩形数据shape格式


        var circleGlobalShape = {
          cx: centerX,
          cy: centerY,
          r: globalDlt
        };
        var circleScreenShape = {
          cx: centerX,
          cy: centerY,
          sr: screenDlt
        }; // 绘制矩形完成之后触发告知用户层

        this.map.eventsObServer.emit(EEventType.DrawDone, this.map.mode, circleGlobalShape, circleScreenShape);
      }
      /*****************************************************/

      /*************** map 线段 *************************/

      /*****************************************************/

    }, {
      key: "handleLineStart",
      value: function handleLineStart(e) {
        var _this5 = this;

        // 说明绘制线段第一个点
        if (this.tmpPointsStore.length === 0) {
          this.clearDownTimer();
          this.downTimer = window.setTimeout(function () {
            _this5.tmpPointsStore.push(_this5.startPoint);

            _this5.map.overlayLayer.addText({
              text: '移动鼠标开始绘制',
              position: _this5.startPoint.global
            }, {
              clear: true
            });
          }, 300);
        } else if (this.tmpPointsStore.length === 1) {
          var startGlobal = this.tmpPointsStore[0].global;
          var endGlobal = this.startPoint.global; // 绘制矩形完成之后触发告知用户层

          this.map.eventsObServer.emit(EEventType.DrawDone, this.map.mode, {
            start: startGlobal,
            end: endGlobal
          });
          this.reset();
        }
      }
    }, {
      key: "handleLineMove",
      value: function handleLineMove(e) {
        var offsetX = e.offsetX,
            offsetY = e.offsetY;
        var screen = {
          x: offsetX,
          y: offsetY
        };
        var global = this.map.transformScreenToGlobal(screen);
        var pointsLength = this.tmpPointsStore.length;

        if (pointsLength === 0) {
          this.map.overlayLayer.addText({
            text: '单击确定起点',
            position: global
          }, {
            clear: true
          });
        } else if (pointsLength === 1) {
          var start = this.tmpPointsStore[0].global;
          var end = this.map.transformScreenToGlobal({
            x: offsetX,
            y: offsetY
          });
          this.map.overlayLayer.addLineFeature({
            start: start,
            end: end
          });
          this.map.overlayLayer.addText({
            text: '单击确定终点',
            position: global
          }, {
            clear: false
          });
        }
      }
      /*****************************************************/

      /***************** map 多段线 *************************/

      /*****************************************************/

    }, {
      key: "handlePolylineStart",
      value: function handlePolylineStart(e) {
        var _this6 = this;

        if (this.tmpPointsStore.length === 0) {
          this.clearDownTimer();
          this.downTimer = window.setTimeout(function () {
            _this6.tmpPointsStore.push(_this6.startPoint);
          }, 300);
        } else {
          this.tmpPointsStore.push(this.startPoint);
        }
      }
    }, {
      key: "handlePolylineMove",
      value: function handlePolylineMove(e) {
        var offsetX = e.offsetX,
            offsetY = e.offsetY;
        var moveGlobalPoint = this.map.transformScreenToGlobal({
          x: offsetX,
          y: offsetY
        });

        var drawingGlobalPoints = map_1(this.tmpPointsStore, function (_ref2) {
          var global = _ref2.global;
          return global;
        });

        drawingGlobalPoints.push(moveGlobalPoint);

        if (drawingGlobalPoints.length > 1) {
          this.map.overlayLayer.addPolylineFeature({
            points: drawingGlobalPoints
          });
        }
      }
    }, {
      key: "handlePolylineEnd",
      value: function handlePolylineEnd(e) {
        this.tmpPointsStore.pop(); // 移除两次handlePolylineStart事件执行多的一个点

        if (this.tmpPointsStore.length >= 2) {
          this.map.eventsObServer.emit(EEventType.DrawDone, this.map.mode, map_1(this.tmpPointsStore, function (_ref3) {
            var global = _ref3.global;
            return global;
          }));
        }

        this.reset();
      }
      /*****************************************************/

      /*************** map 矩形绘制 *************************/

      /*****************************************************/

    }, {
      key: "handleRectStart",
      value: function handleRectStart(e) {
        this.dragging = true; // 鼠标按下态

        document.onmousemove = this.handleRectMove;
        document.onmouseup = this.handleRectEnd;
      }
    }, {
      key: "handleRectMove",
      value: function handleRectMove(e) {
        var _this$startPoint$glob2 = this.startPoint.global,
            x = _this$startPoint$glob2.x,
            y = _this$startPoint$glob2.y;

        var _this$getDltXY7 = this.getDltXY(e, {
          transform: true
        }),
            width = _this$getDltXY7.x,
            height = _this$getDltXY7.y;

        var ltx = Math.min(x, x + width);
        var lty = Math.max(y, y - height);
        var rectShape = {
          x: ltx,
          y: lty,
          width: Math.abs(width),
          height: Math.abs(height)
        };
        this.map.overlayLayer.addRectFeature(rectShape);
      }
    }, {
      key: "handleRectEnd",
      value: function handleRectEnd(e) {
        this.dragging = false; // 鼠标抬起

        document.onmousemove = null;
        document.onmouseup = null;
        var scale = this.map.getScale();
        var _this$startPoint$scre = this.startPoint.screen,
            startScreeX = _this$startPoint$scre.x,
            startScreeY = _this$startPoint$scre.y;

        var _this$getDltXY8 = this.getDltXY(e),
            screenDltX = _this$getDltXY8.x,
            screenDltY = _this$getDltXY8.y;

        var width = Math.abs(screenDltX) / scale;
        var height = Math.abs(screenDltY) / scale;
        var pointRBX = startScreeX + screenDltX;
        var pointRBY = startScreeY + screenDltY;
        var pointLTX = Math.min(pointRBX, startScreeX);
        var pointLTY = Math.min(pointRBY, startScreeY);
        var globalLTPoint = this.map.transformScreenToGlobal({
          x: pointLTX,
          y: pointLTY
        });
        this.reset(); // 重置临时数据
        // rect矩形有效性判读是否合适

        if (Math.abs(screenDltX) <= 3 || Math.abs(screenDltY) <= 3) {
          console.warn('the rect is too small...');
          return;
        } // 组织矩形数据shape格式


        var rectShape = {
          x: globalLTPoint.x,
          y: globalLTPoint.y,
          width: width,
          height: height
        }; // 绘制矩形完成之后触发告知用户层

        this.map.eventsObServer.emit(EEventType.DrawDone, this.map.mode, rectShape);
      }
      /*****************************************************/

      /*************** map 矩形多边形 ************************/

      /*****************************************************/

    }, {
      key: "handlePolygonStart",
      value: function handlePolygonStart(e) {
        var _this7 = this;

        if (this.tmpPointsStore.length === 0) {
          this.clearDownTimer();
          this.downTimer = window.setTimeout(function () {
            _this7.tmpPointsStore.push(_this7.startPoint);
          }, 300);
        } else {
          this.tmpPointsStore.push(this.startPoint);
        }
      }
    }, {
      key: "handlePolygonMove",
      value: function handlePolygonMove(e) {
        var offsetX = e.offsetX,
            offsetY = e.offsetY;
        var moveGlobalPoint = this.map.transformScreenToGlobal({
          x: offsetX,
          y: offsetY
        });

        var drawingGlobalPoints = map_1(this.tmpPointsStore, function (_ref4) {
          var global = _ref4.global;
          return global;
        });

        drawingGlobalPoints.push(moveGlobalPoint);

        if (drawingGlobalPoints.length > 1) {
          this.map.overlayLayer.addPolygonFeature({
            points: drawingGlobalPoints
          });
        }
      }
    }, {
      key: "handlePolygonEnd",
      value: function handlePolygonEnd(e) {
        this.tmpPointsStore.pop(); // 移除两次handlePolygonStart事件执行多的一个点

        if (this.tmpPointsStore.length >= 3) {
          // 绘制矩形完成之后触发告知用户层
          var points = map_1(this.tmpPointsStore, function (_ref5) {
            var global = _ref5.global;
            return global;
          });

          this.map.eventsObServer.emit(EEventType.DrawDone, this.map.mode, points);
        }

        this.reset();
      }
      /*****************************************************/

      /**********+****** map 涂抹 ***************************/

      /*****************************************************/

    }, {
      key: "handleMaskStart",
      value: function handleMaskStart(e) {
        this.dragging = true; // 鼠标按下态

        document.onmousemove = this.handleMaskMove;
        document.onmouseup = this.handleMaskEnd;
        this.tmpPointsStore.push(this.startPoint);

        var points = map_1(this.tmpPointsStore, function (_ref6) {
          var global = _ref6.global;
          return global;
        }); // 模式变化


        switch (this.map.mode) {
          case EMapMode.DrawMask:
            {
              this.map.overlayLayer.addDrawAction({
                points: points
              });
              break;
            }

          case EMapMode.ClearMask:
            {
              this.handleMaskClearMoving({
                points: points
              });
              break;
            }
        }
      }
    }, {
      key: "handleMaskMove",
      value: function handleMaskMove(e) {
        var _this$startPoint$scre2 = this.startPoint.screen,
            startScreeX = _this$startPoint$scre2.x,
            startScreeY = _this$startPoint$scre2.y;

        var _this$getDltXY9 = this.getDltXY(e),
            dltX = _this$getDltXY9.x,
            dltY = _this$getDltXY9.y;

        var middleScreenPoint = {
          x: startScreeX + dltX,
          y: startScreeY + dltY
        };
        var middleGlobalPoint = this.map.transformScreenToGlobal(middleScreenPoint);
        this.tmpPointsStore.push({
          screen: middleScreenPoint,
          global: middleGlobalPoint
        });

        var points = map_1(this.tmpPointsStore, function (_ref7) {
          var global = _ref7.global;
          return global;
        }); // 模式变化


        switch (this.map.mode) {
          case EMapMode.DrawMask:
            {
              // 在临时层上绘制涂抹
              this.map.overlayLayer.addDrawAction({
                points: points
              });
              break;
            }

          case EMapMode.ClearMask:
            {
              // 在涂抹层上进行删除
              this.handleMaskClearMoving({
                points: points
              });
              break;
            }
        }
      }
    }, {
      key: "handleMaskEnd",
      value: function handleMaskEnd(e) {
        this.dragging = false; // 鼠标抬起

        document.onmousemove = null;
        document.onmouseup = null;

        var maskPoints = map_1(this.tmpPointsStore, function (_ref8) {
          var global = _ref8.global;
          return global;
        });

        this.map.eventsObServer.emit(EEventType.DrawDone, this.map.mode, // drawMask | clearMask
        maskPoints);
        this.reset();
        this.handleMaskClearMoving({
          reset: true
        });
      }
    }, {
      key: "handleMaskClearMoving",
      value: function handleMaskClearMoving(_ref9) {
        var _ref9$points = _ref9.points,
            points = _ref9$points === void 0 ? [] : _ref9$points,
            _ref9$reset = _ref9.reset,
            reset = _ref9$reset === void 0 ? false : _ref9$reset;
        var mapLayers = this.map.getLayers();
        var drawingStyle = this.map.drawingStyle;
        var _drawingStyle$lineWid = drawingStyle.lineWidth,
            lineWidth = _drawingStyle$lineWid === void 0 ? 10 : _drawingStyle$lineWid;
        var scale = this.map.getScale();
        var clearWidth = lineWidth / scale;

        forEach_1(mapLayers, function (layer) {
          // 需要进行擦除动作
          if (layer.type === ELayerType.Mask && !reset) {
            var clearAction = new ClearActionFeature("".concat(+new Date()), // id
            {
              points: points,
              width: clearWidth
            }, // shape
            {}, drawingStyle);
            layer.setMovingClearAction(clearAction);
          } else if (layer.type === ELayerType.Mask && reset) {
            layer.setMovingClearAction(null);
          }
        });
      }
      /*****************************************************/

      /************** map 鼠标滑轮缩放 ***********************/

      /*****************************************************/
      // mouse在map:pan模式下进行滑轮缩放[不断重绘图层方式，性能会受影响]

    }, {
      key: "handleMapZoom",
      value: function handleMapZoom(e) {
        var offsetX = e.offsetX,
            offsetY = e.offsetY;
        var screen = {
          x: offsetX,
          y: offsetY
        };
        var global = this.map.transformScreenToGlobal(screen);
        var basePoint = {
          screen: screen,
          global: global
        }; // 计算缩放中心点

        var newZoom = e.deltaY < 0 ? this.map.zoom * 95 / 100 // zoomIn
        : this.map.zoom * 105.263 / 100; // 为了返回上一次的zoom

        var screenCenter = this.map.getScreenCenter();
        var newCenter = this.map.transformScreenToGlobal(screenCenter, {
          basePoint: basePoint,
          zoom: newZoom
        });
        this.map.centerAndZoom({
          center: newCenter,
          zoom: newZoom
        });
      }
      /*****************************************************/

      /************** map 双击编辑 ***********************/

      /*****************************************************/

    }, {
      key: "handleFeatureSelect",
      value: function handleFeatureSelect(e) {
        var global = this.startPoint.global;
        var mapLayers = this.map.getLayers();
        var targetFeatures = [];

        forEach_1(mapLayers, function (layer) {
          if (layer.type === ELayerType.Feature) {
            var target = layer.getTargetFeatureWithPoint(global);

            if (target) {
              targetFeatures.push(target);
              return false;
            }
          }
        });

        var targetFeature = get_1(targetFeatures, '[0]', null); // 如果捕捉到，则触发事件回调


        targetFeature && this.map.eventsObServer.emit(EEventType.FeatureSelected, targetFeature);
      }
      /*****************************************************/

      /*******+**** map 鼠标捕捉activeFeature ***************/

      /*****************************************************/

    }, {
      key: "handleActiveFeatureCapture",
      value: function handleActiveFeatureCapture(e) {
        var _this8 = this;

        var offsetX = e.offsetX,
            offsetY = e.offsetY;
        var currentPoint = {
          x: offsetX,
          y: offsetY
        };
        var currentGlobalPoint = this.map.transformScreenToGlobal(currentPoint);
        var activeFeature = this.map.activeFeature;

        var _ref10 = activeFeature || {},
            type = _ref10.type,
            shape = _ref10.shape; // 重置捕捉的feature及featureIndex


        this.hoverFeature = null;
        this.hoverFeatureIndex = undefined;

        switch (type) {
          case EFeatureType.Point:
            {
              if (activeFeature.captureWithPoint(currentGlobalPoint)) {
                this.hoverFeature = activeFeature;
                this.map.setCursor(ECursorType.Pointer);
              }

              break;
            }

          case EFeatureType.Rect:
          case EFeatureType.Circle:
            {
              var isRectType = type === EFeatureType.Rect; // 计算获取点集合

              var points = isRectType ? activeFeature.getPoints() : activeFeature.getEdgePoints(); // 首先进行捕捉点判断

              forEach_1(points, function (point, index) {
                // 首先判断当前点
                var sPoint = _this8.map.transformGlobalToScreen(point);

                var distance = Util.MathUtil.distance(sPoint, currentPoint);

                if (distance <= 5) {
                  _this8.hoverFeatureIndex = index;
                  var cursor = index === 1 || index === 3 ? ECursorType.NESW_Resize : ECursorType.NWSE_Resize;

                  _this8.map.setCursor(cursor);

                  return false;
                }
              }); // 如果没有捕捉到点，此时需要判断是否捕捉到图形


              if (!isNumber_1(this.hoverFeatureIndex) && activeFeature.captureWithPoint(currentGlobalPoint)) {
                this.hoverFeature = activeFeature;
                this.map.setCursor(ECursorType.Move);
              }

              break;
            }

          case EFeatureType.Line:
          case EFeatureType.Polyline:
          case EFeatureType.Polygon:
            {
              var isLine = type === EFeatureType.Line;
              var isPolyline = type === EFeatureType.Polyline;
              type === EFeatureType.Polygon;
              var _ref11 = shape,
                  lineStartPoint = _ref11.start,
                  lineEndPoint = _ref11.end;
              var _ref12 = shape,
                  _ref12$points = _ref12.points,
                  multiPoints = _ref12$points === void 0 ? [] : _ref12$points;

              var _points = isLine ? [lineStartPoint, lineEndPoint] : multiPoints; // 首先进行捕捉点判断


              forEach_1(_points, function (point, index) {
                // 首先判断当前点
                var sPoint = _this8.map.transformGlobalToScreen(point);

                var distance = Util.MathUtil.distance(sPoint, currentPoint);

                if (distance <= 5) {
                  _this8.hoverFeatureIndex = index;

                  _this8.map.setCursor(ECursorType.Pointer);

                  return false;
                } // 如果是线段，不需要判断中间节点，直接判断下一节点


                if (isLine) {
                  return;
                } // 如果是多段线且最后一个节点


                if (isPolyline && !_points[index + 1]) {
                  return false;
                } // 其次判断当前点与下一点之间的中心点


                var nextPoint = _points[index + 1] || _points[0];
                var middlePoint = Util.MathUtil.getMiddlePoint(point, nextPoint);

                var sMiddlePoint = _this8.map.transformGlobalToScreen(middlePoint);

                var distance2 = Util.MathUtil.distance(sMiddlePoint, currentPoint);

                if (distance2 <= 5) {
                  _this8.hoverFeatureIndex = index + 0.5;

                  _this8.map.setCursor(ECursorType.Pointer);

                  return false;
                }
              }); // 如果没有捕捉到点，此时需要判断是否捕捉到图形


              if (!isNumber_1(this.hoverFeatureIndex) && activeFeature.captureWithPoint(currentGlobalPoint)) {
                this.hoverFeature = activeFeature;
                this.map.setCursor(ECursorType.Move);
              }

              break;
            }
        }
      }
      /*****************************************************/

      /*******+**** map 捕捉到的feature鼠标按下 ***************/

      /*****************************************************/

    }, {
      key: "handleActiveFeatureStart",
      value: function handleActiveFeatureStart(e) {
        // 鼠标相关变量
        var btnIndex = Util.EventUtil.getButtonIndex(e); // 鼠标左键按下

        if (btnIndex === 0) {
          this.dragging = true; // 鼠标按下态

          document.onmousemove = this.handleActiveFeatureMove;
          document.onmouseup = this.handleActiveFeatureEnd;
        } // 鼠标右键按下
        else if (btnIndex === 2) {
            this.handleActiveFeatureElse(e);
          }
      }
    }, {
      key: "handleActiveFeatureMove",
      value: function handleActiveFeatureMove(e) {
        var _this9 = this;

        var _this$getDltXY10 = this.getDltXY(e, {
          transform: true
        }),
            globalDltX = _this$getDltXY10.x,
            globalDltY = _this$getDltXY10.y;

        var _this$getDltXY11 = this.getDltXY(e, {
          transform: false
        }),
            screenDltX = _this$getDltXY11.x,
            screenDltY = _this$getDltXY11.y;

        var activeFeature = this.map.activeFeature;
        var type = activeFeature.type,
            shape = activeFeature.shape,
            style = activeFeature.style;

        switch (type) {
          case EFeatureType.Point:
            {
              var _ref13 = shape,
                  x = _ref13.x,
                  y = _ref13.y;
              this.toUpdateShape = _objectSpread2(_objectSpread2({}, shape), {}, {
                x: x + globalDltX,
                y: y - globalDltY
              }); // 临时层执行绘制

              this.map.overlayLayer.addActiveFeature(activeFeature);
              this.map.overlayLayer.addPointFeature(this.toUpdateShape, {
                clear: false,
                style: _objectSpread2(_objectSpread2({}, style), {}, {
                  fillStyle: '#FF0000'
                })
              });
              break;
            }

          case EFeatureType.Circle:
            {
              var _ref14 = shape,
                  cx = _ref14.cx,
                  cy = _ref14.cy,
                  r = _ref14.r,
                  sr = _ref14.sr;

              if (this.hoverFeature) {
                this.toUpdateShape = _objectSpread2(_objectSpread2({}, shape), {}, {
                  cx: cx + globalDltX,
                  cy: cy - globalDltY
                });
              } else if (isNumber_1(this.hoverFeatureIndex)) {
                var isLeft = this.hoverFeatureIndex === 0 || this.hoverFeatureIndex === 3;
                var isRight = this.hoverFeatureIndex === 1 || this.hoverFeatureIndex === 2;
                var circleSubtype = activeFeature.getSubType();
                var isGlobalType = circleSubtype === EFeatureCircleSubtype.Global;
                var globalDlt = Math.sqrt(globalDltX * globalDltX + globalDltY * globalDltY);
                var screenDlt = Math.sqrt(screenDltX * screenDltX + screenDltY * screenDltY); // isLeft screenDltX <= 0 ? + : -
                // isRight screenDltX >=0 ? + : -

                var isLager = isLeft && screenDltX <= 0 || isRight && screenDltX >= 0;
                var newRadius = isGlobalType ? isLager ? r + globalDlt : r - globalDlt : isLager ? sr + screenDlt : sr - screenDlt; // 如果半径小于0不做任何处理å

                if (newRadius <= 0) {
                  console.warn('circle update error: invalid radius, radius <= 0');
                  return;
                }

                this.toUpdateShape = _objectSpread2(_objectSpread2({}, shape), isGlobalType ? {
                  r: newRadius
                } : {
                  sr: newRadius
                });
              }

              this.map.overlayLayer.addActiveFeature(activeFeature);
              this.map.overlayLayer.addCircleFeature(this.toUpdateShape, {
                clear: false,
                style: _objectSpread2(_objectSpread2({}, style), {}, {
                  lineWidth: 1,
                  strokeStyle: '#FF0000'
                })
              });
              break;
            }

          case EFeatureType.Rect:
            {
              var _ref15 = shape,
                  _x = _ref15.x,
                  _y = _ref15.y,
                  width = _ref15.width,
                  height = _ref15.height; // 说明捕捉到了feature元素

              var newRectShape = null;

              if (this.hoverFeature) {
                newRectShape = {
                  x: _x + globalDltX,
                  y: _y - globalDltY,
                  width: width,
                  height: height
                };
              } // 说明捕捉到了feature节点
              else if (isNumber_1(this.hoverFeatureIndex)) {
                  // newRectShape = {x: x + globalDltX, y: y - globalDltY, width, height};
                  var _isLeft = this.hoverFeatureIndex === 0 || this.hoverFeatureIndex === 3;

                  var isTop = this.hoverFeatureIndex === 0 || this.hoverFeatureIndex === 1;
                  var preNewX = _isLeft ? _x + globalDltX : _x;
                  var preNewY = isTop ? _y - globalDltY : _y;
                  var preNewWidth = _isLeft ? width - globalDltX : width + globalDltX;
                  var preNewHeight = isTop ? height - globalDltY : height + globalDltY;
                  var newX = Math.min(preNewX, preNewX + preNewWidth);
                  var newY = Math.max(preNewY, preNewY - preNewHeight);
                  var newWidth = Math.abs(preNewWidth);
                  var newHeight = Math.abs(preNewHeight);
                  newRectShape = {
                    x: newX,
                    y: newY,
                    width: newWidth,
                    height: newHeight
                  };
                } // 保存


              this.toUpdateShape = _objectSpread2(_objectSpread2({}, shape), newRectShape); // 临时层执行绘制

              this.map.overlayLayer.addActiveFeature(activeFeature);
              this.map.overlayLayer.addRectFeature(this.toUpdateShape, {
                clear: false,
                style: _objectSpread2(_objectSpread2({}, style), {}, {
                  lineWidth: 1,
                  strokeStyle: '#FF0000'
                })
              });
              break;
            }

          case EFeatureType.Line:
          case EFeatureType.Polyline:
          case EFeatureType.Polygon:
            {
              var isLine = type === EFeatureType.Line;
              var isPolyline = type === EFeatureType.Polyline;
              var isPolygon = type === EFeatureType.Polygon;
              var _ref16 = shape,
                  lineStartPoint = _ref16.start,
                  lineEndPoint = _ref16.end;
              var _ref17 = shape,
                  _ref17$points = _ref17.points,
                  multiPoints = _ref17$points === void 0 ? [] : _ref17$points;
              var points = isLine ? [lineStartPoint, lineEndPoint] : multiPoints; // 说明捕捉到了feature元素

              var newPoints = [];

              if (this.hoverFeature) {
                newPoints = map_1(points, function (_ref18) {
                  var x = _ref18.x,
                      y = _ref18.y;
                  return {
                    x: x + globalDltX,
                    y: y - globalDltY
                  };
                });
              } // 说明捕捉到了feature节点
              else if (isNumber_1(this.hoverFeatureIndex)) {
                  var intIndex = parseInt("".concat(this.hoverFeatureIndex), 10);

                  forEach_1(points, function (_ref19, index) {
                    var x = _ref19.x,
                        y = _ref19.y;

                    // 说明是真实节点
                    if (index === intIndex && intIndex === _this9.hoverFeatureIndex) {
                      newPoints.push({
                        x: x + globalDltX,
                        y: y - globalDltY
                      });
                    } // 说明是中间节点
                    else if (index === intIndex && intIndex !== _this9.hoverFeatureIndex) {
                        // 其次判断当前点与下一点之间的中心点
                        var nextPoint = points[index + 1] || points[0];
                        var middlePoint = Util.MathUtil.getMiddlePoint({
                          x: x,
                          y: y
                        }, nextPoint);
                        newPoints.push({
                          x: x,
                          y: y
                        });
                        newPoints.push({
                          x: middlePoint.x + globalDltX,
                          y: middlePoint.y - globalDltY
                        });
                      } // 说明其他节点
                      else {
                          newPoints.push({
                            x: x,
                            y: y
                          });
                        }
                  });
                } // 保存


              if (isLine) {
                var _newPoints = newPoints,
                    _newPoints2 = _slicedToArray(_newPoints, 2),
                    start = _newPoints2[0],
                    end = _newPoints2[1];

                this.toUpdateShape = _objectSpread2(_objectSpread2({}, shape), {}, {
                  start: start,
                  end: end
                });
              } else {
                this.toUpdateShape = _objectSpread2(_objectSpread2({}, shape), {}, {
                  points: newPoints
                });
              } // 临时层执行绘制


              this.map.overlayLayer.addActiveFeature(activeFeature); // 线段绘制

              isLine && this.map.overlayLayer.addLineFeature(this.toUpdateShape, {
                clear: false,
                style: _objectSpread2(_objectSpread2({}, style), {}, {
                  strokeStyle: '#FF0000'
                })
              }); // 多段线绘制

              isPolyline && this.map.overlayLayer.addPolylineFeature(this.toUpdateShape, {
                clear: false,
                style: _objectSpread2(_objectSpread2({}, style), {}, {
                  strokeStyle: '#FF0000'
                })
              }); // 多边形绘制

              isPolygon && this.map.overlayLayer.addPolygonFeature(this.toUpdateShape, {
                clear: false,
                style: _objectSpread2(_objectSpread2({}, style), {}, {
                  lineWidth: 1,
                  strokeStyle: '#FF0000'
                })
              });
              break;
            }
        }
      }
    }, {
      key: "handleActiveFeatureEnd",
      value: function handleActiveFeatureEnd(e) {
        this.dragging = false; // 鼠标抬起

        document.onmousemove = null;
        document.onmouseup = null;
        this.map.overlayLayer.clear();
        var activeFeature = this.map.activeFeature; // 首先需要恢复选中要素的选中态

        activeFeature && this.map.overlayLayer.addActiveFeature(activeFeature); // 如果存在更新数据

        if (this.toUpdateShape && activeFeature) {
          // 然后进行事件回调处理事件
          var type = activeFeature.type;

          switch (type) {
            case EFeatureType.Point:
            case EFeatureType.Circle:
            case EFeatureType.Line:
            case EFeatureType.Polyline:
            case EFeatureType.Rect:
            case EFeatureType.Polygon:
              {
                this.map.eventsObServer.emit(EEventType.FeatureUpdated, activeFeature, this.toUpdateShape);
                break;
              }
          } // 重置还原


          this.toUpdateShape = null;
        }
      } // 鼠标右键事件处理

    }, {
      key: "handleActiveFeatureElse",
      value: function handleActiveFeatureElse(e) {
        var activeFeature = this.map.activeFeature; // 如果存在更新数据

        if (activeFeature) {
          var type = activeFeature.type,
              shape = activeFeature.shape;

          switch (type) {
            case EFeatureType.Point:
              {
                this.map.eventsObServer.emit(EEventType.FeatureDeleted, activeFeature);
                break;
              }

            case EFeatureType.Polyline:
            case EFeatureType.Polygon:
              {
                var isPolyline = type === EFeatureType.Polyline;
                type === EFeatureType.Polygon;
                var minPointsCount = isPolyline ? 2 : 3;
                var _ref20 = shape,
                    _ref20$points = _ref20.points,
                    points = _ref20$points === void 0 ? [] : _ref20$points; // 如果捕捉到节点 && 当前点的个数大于minPointsCount个点【有可供删除的节点】

                if (isNumber_1(this.hoverFeatureIndex) && points.length > minPointsCount) {
                  var intIndex = parseInt("".concat(this.hoverFeatureIndex), 10); // 说明此时需要删除右键单击的真实节点

                  if (intIndex === this.hoverFeatureIndex) {
                    var newPoints = filter_1(points, function (__, index) {
                      return index !== intIndex;
                    }); // 修正后的shape数据返回


                    var toUpdateShape = _objectSpread2(_objectSpread2({}, shape), {}, {
                      points: newPoints
                    });

                    this.map.eventsObServer.emit(EEventType.FeatureUpdated, activeFeature, toUpdateShape);
                  }
                }

                break;
              }
          }
        }
      }
      /*****************************************************/

      /**************** map 事件绑定 ************************/

      /*****************************************************/
      // onMouseDown: 事件绑定

    }, {
      key: "onMouseDown",
      value: function onMouseDown(e) {
        // 相关坐标值处理
        var offsetX = e.offsetX,
            offsetY = e.offsetY,
            screenX = e.screenX,
            screenY = e.screenY; // 记录起始坐标

        var screen = {
          x: offsetX,
          y: offsetY
        };
        var global = this.map.transformScreenToGlobal(screen); // 设置保存起始坐标

        this.startPoint = {
          screen: screen,
          global: global
        };
        this.startPageScreenPoint = {
          x: screenX,
          y: screenY
        };
        var mapMode = this.map.mode;
        var dragging = this.dragging;

        var isCapturedFeature = this.hoverFeature || isNumber_1(this.hoverFeatureIndex);

        var drawing = !dragging && !isCapturedFeature; // 首先判断是否是取消选中

        if (this.map.activeFeature && !isCapturedFeature) {
          this.map.eventsObServer.emit(EEventType.FeatureUnselected, this.map.activeFeature, 'cancel by click');
          return;
        }

        if (mapMode === EMapMode.Pan && drawing) {
          this.handleMapPanStart(e);
        } else if (mapMode === EMapMode.MARKER && drawing) {
          this.handleMarkerStart(e);
        } else if (mapMode === EMapMode.Point && drawing) {
          this.handlePointStart(e);
        } else if (mapMode === EMapMode.Circle && drawing) {
          this.handleCircleStart(e);
        } else if (mapMode === EMapMode.Line && drawing) {
          this.handleLineStart(e);
        } else if (mapMode === EMapMode.Polyline && drawing) {
          this.handlePolylineStart(e);
        } else if (mapMode === EMapMode.Rect && drawing) {
          this.handleRectStart(e);
        } else if (mapMode === EMapMode.Polygon && drawing) {
          this.handlePolygonStart(e);
        } else if ((mapMode === EMapMode.DrawMask || mapMode === EMapMode.ClearMask) && drawing) {
          // 绘制｜清除涂抹
          this.handleMaskStart(e);
        } // 如果存在捕捉到feature或者featureIndex


        if (isCapturedFeature && !dragging) {
          this.handleActiveFeatureStart(e);
        }
      } // onMouseMove: 事件绑定

    }, {
      key: "onMouseMove",
      value: function onMouseMove(e) {
        // 实时记录mouseMoveEvent事件对象
        this.mouseMoveEvent = e; // 相关坐标值处理

        var offsetX = e.offsetX,
            offsetY = e.offsetY;
            e.screenX;
            e.screenY; // 记录起始坐标

        var screen = {
          x: offsetX,
          y: offsetY
        };
        var global = this.map.transformScreenToGlobal(screen); // 后续对应模式处理

        var mapMode = this.map.mode;
        var dragging = this.dragging;

        if (mapMode === EMapMode.Pan && !dragging) {
          this.map.setCursor(ECursorType.Grab);
        } else if (mapMode === EMapMode.MARKER && !dragging) {
          this.map.setCursor(ECursorType.Crosshair);
        } else if (mapMode === EMapMode.Point && !dragging) {
          this.map.setCursor(ECursorType.Crosshair);
          this.map.overlayLayer.addText({
            text: '点击绘制点',
            position: global
          });
        } else if (mapMode === EMapMode.Circle && !dragging) {
          this.map.setCursor(ECursorType.Crosshair);
          this.map.overlayLayer.addText({
            text: '按下确定圆心',
            position: global
          });
        } else if (mapMode === EMapMode.Line && !dragging) {
          this.map.setCursor(ECursorType.Crosshair);
          this.handleLineMove(e);
        } else if (mapMode === EMapMode.Polyline && !dragging) {
          this.map.setCursor(ECursorType.Crosshair);
          this.handlePolylineMove(e);
        } else if (mapMode === EMapMode.Rect && !dragging) {
          this.map.setCursor(ECursorType.Crosshair);
        } else if (mapMode === EMapMode.Polygon && !dragging) {
          this.map.setCursor(ECursorType.Crosshair);
          this.handlePolygonMove(e);
        } else if ((mapMode === EMapMode.DrawMask || mapMode === EMapMode.ClearMask) && !dragging) {
          this.map.setCursor(ECursorType.Crosshair);
        } // 编辑态，平移捕捉


        if (includes_1([EMapMode.Point, EMapMode.Circle, EMapMode.Line, EMapMode.Polyline, EMapMode.Rect, EMapMode.Polygon], mapMode) && !dragging) {
          // 如果存在activeFeature, 此时需要进行捕捉
          this.handleActiveFeatureCapture(e);
        }
      } // onMouseUp: 事件绑定

    }, {
      key: "onMouseUp",
      value: function onMouseUp(e) {} // onMouseDblClick: 事件绑定-双击事件

    }, {
      key: "onMouseDblClick",
      value: function onMouseDblClick(e) {
        // 判断是否在绘制或者编辑拖拽过程中
        var mapMode = this.map.mode;
        this.clearDownTimer();
        var drawing = this.dragging || this.tmpPointsStore.length;

        if (mapMode === EMapMode.Polyline && drawing) {
          this.handlePolylineEnd(e);
        } else if (mapMode === EMapMode.Polygon && drawing) {
          this.handlePolygonEnd(e);
        } // 编辑态，平移捕捉


        if (includes_1([EMapMode.Point, EMapMode.Circle, EMapMode.Line, EMapMode.Polyline, EMapMode.Rect, EMapMode.Polygon], mapMode) && !drawing) {
          this.handleFeatureSelect(e);
        }
      } // onMouseWheel: 鼠标滑动

    }, {
      key: "onMouseWheel",
      value: function onMouseWheel(e) {
        e.preventDefault(); // 后续对应模式处理

        switch (this.map.mode) {
          case EMapMode.Pan:
            {
              this.handleMapZoom(e);
              break;
            }
        }
      } // 重置drawing过程中产生的临时数据&清空临时绘制层

    }, {
      key: "reset",
      value: function reset() {
        // 绘制完成之后进行this.tmpPointsStore清空处理
        this.tmpPointsStore = []; // 清空overlayLayer

        this.map.overlayLayer.clear();
      } // @override

    }, {
      key: "refresh",
      value: function refresh() {
        _get(_getPrototypeOf(MaskLayer.prototype), "refresh", this).call(this);
      }
    }]);

    return MaskLayer;
  }(Layer$1);

  var Feature$1 = /*#__PURE__*/function () {
    // featureId
    // featureType
    // props
    // 对象空间数据结构
    // 最小外接矩形

    /**
     * props: feature样式
     * defaultStyle: 默认配置项
     * style: userFeatureStyle merge defaultStyle
    */
    // function: constructor
    function Feature(id, type) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, Feature);

      this.id = id;
      this.type = type;
      this.props = props;
      this.style = assign_1({}, Feature.defaultStyle, style);
    } // function: trigger when feature add to featureLayer


    _createClass(Feature, [{
      key: "onAdd",
      value: function onAdd(layer) {
        this.layer = layer;
        this.refresh();
      } // trigger when layer remove from map
      // map exits first

    }, {
      key: "onRemove",
      value: function onRemove() {
        var _this$layer, _this$layer$map;

        // 如果map上的activeFeature 为 当前feature，此时需要同步更新map.activeFeature
        var activeFeature = (_this$layer = this.layer) === null || _this$layer === void 0 ? void 0 : (_this$layer$map = _this$layer.map) === null || _this$layer$map === void 0 ? void 0 : _this$layer$map.activeFeature;

        if (activeFeature && activeFeature.id === this.id) {
          this.layer.map.setActiveFeature(null);
        }
      } // 获取最小外接矩形[各子类自行实现]

    }, {
      key: "getBounds",
      value: function getBounds() {
        return {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      } // 判断是否捕捉到当前对象，各子类自行实现

    }, {
      key: "captureWithPoint",
      value: function captureWithPoint(point) {
        return false;
      } // 更新图形坐标

    }, {
      key: "updateShape",
      value: function updateShape(shape) {
        var _this$layer2, _this$layer3, _this$layer3$map;

        this.shape = shape;
        (_this$layer2 = this.layer) === null || _this$layer2 === void 0 ? void 0 : _this$layer2.refresh(); // 如果map上的activeFeature 为 当前feature，此时需要同步更新map.activeFeature

        var activeFeature = (_this$layer3 = this.layer) === null || _this$layer3 === void 0 ? void 0 : (_this$layer3$map = _this$layer3.map) === null || _this$layer3$map === void 0 ? void 0 : _this$layer3$map.activeFeature;

        if (activeFeature && activeFeature.id === this.id) {
          this.layer.map.setActiveFeature(this);
        }
      } // 改变样式

    }, {
      key: "setStyle",
      value: function setStyle(style, option) {
        var _this$layer4;

        var _option$refresh = option.refresh,
            refresh = _option$refresh === void 0 ? true : _option$refresh;
        this.style = style;
        refresh && ((_this$layer4 = this.layer) === null || _this$layer4 === void 0 ? void 0 : _this$layer4.refresh());
      } // 刷新当前数据

    }, {
      key: "refresh",
      value: function refresh() {} // 打印测试输出

    }, {
      key: "printInfo",
      value: function printInfo() {}
    }]);

    return Feature;
  }();

  _defineProperty$1(Feature$1, "defaultStyle", {
    opacity: 1,
    fillStyle: 'rgba(255, 0, 0, 0)',
    lineWidth: 1,
    strokeStyle: '#000' // 边框颜色

  });

  var PointFeature = /*#__PURE__*/function (_Feature) {
    _inherits(PointFeature, _Feature);

    var _super = _createSuper(PointFeature);

    // PointFeature附件选项，附加字段
    // function: constructor
    function PointFeature(id, shape) {
      var _this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var option = arguments.length > 4 ? arguments[4] : undefined;

      _classCallCheck(this, PointFeature);

      _this = _super.call(this, id, EFeatureType.Point, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "option", {});

      _this.shape = shape;
      _this.option = assign_1({}, PointFeature.defaultOption, option || {});
      return _this;
    } // @override
    // 判断是否捕捉到当前对象，各子类自行实现


    _createClass(PointFeature, [{
      key: "captureWithPoint",
      value: function captureWithPoint(point) {
        var _this$layer, _this$layer$map;

        var _ref = this.shape,
            x = _ref.x,
            y = _ref.y,
            r = _ref.r,
            sr = _ref.sr;
        var mapScale = (_this$layer = this.layer) === null || _this$layer === void 0 ? void 0 : (_this$layer$map = _this$layer.map) === null || _this$layer$map === void 0 ? void 0 : _this$layer$map.getScale();
        var buffer = mapScale ? 3 / mapScale : 0;
        var tolerance = isNumber_1(r) ? r + buffer : isNumber_1(sr) ? sr / mapScale + buffer : buffer;
        return Util.MathUtil.pointInPoint(point, {
          x: x,
          y: y
        }, {
          tolerance: tolerance
        });
      } // 执行绘制当前
      // @override

    }, {
      key: "refresh",
      value: function refresh() {
        // 执行坐标转换
        var _ref2 = this.shape,
            x = _ref2.x,
            y = _ref2.y,
            r = _ref2.r,
            sr = _ref2.sr;

        var _this$layer$map$trans = this.layer.map.transformGlobalToScreen({
          x: x,
          y: y
        }),
            screenX = _this$layer$map$trans.x,
            screenY = _this$layer$map$trans.y;

        var dpr = CanvasLayer.dpr;
        var scale = this.layer.map.getScale();
        var screenWidth = isNumber_1(r) ? r * scale : isNumber_1(sr) ? sr : 2;
        var cx = screenX * dpr;
        var cy = screenY * dpr;
        var cr = screenWidth * dpr;
        Graphic.drawPoint(this.layer.canvasContext, {
          x: cx,
          y: cy,
          r: cr
        }, this.style, {}); // 说明是选中态，需要绘制边框&交叉线

        if (this.option.active) {
          var LTX = cx - cr - 2;
          var LTY = cy - cr - 2;
          var width = cr * 2 + 4;
          var height = cr * 2 + 4; // 绘制对角线

          var RTX = LTX + width;
          var RTY = LTY;
          var RBX = RTX;
          var RBY = RTY + height;
          var LBX = LTX;
          var LBY = RBY; // 绘制斜对角线

          Graphic.drawLine(this.layer.canvasContext, {
            start: {
              x: LTX,
              y: LTY
            },
            end: {
              x: RBX,
              y: RBY
            }
          }, {
            strokeStyle: '#fff'
          });
          Graphic.drawLine(this.layer.canvasContext, {
            start: {
              x: RTX,
              y: RTY
            },
            end: {
              x: LBX,
              y: LBY
            }
          }, {
            strokeStyle: '#fff'
          }); // 绘制外接矩形

          Graphic.drawRect(this.layer.canvasContext, {
            x: LTX,
            y: LTY,
            width: width,
            height: height
          }, {
            strokeStyle: '#666'
          });
        }
      }
    }]);

    return PointFeature;
  }(Feature$1);

  _defineProperty$1(PointFeature, "defaultOption", {
    active: false // 是否绘制选中态，默认不是选中态【内部使用/内部使用/内部使用】

  });

  var LineFeature = /*#__PURE__*/function (_Feature) {
    _inherits(LineFeature, _Feature);

    var _super = _createSuper(LineFeature);

    // function: constructor
    function LineFeature(id, shape) {
      var _this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, LineFeature);

      _this = _super.call(this, id, EFeatureType.Line, props, style);
      _this.shape = shape;
      return _this;
    } // @override
    // 判断是否捕捉到当前对象，各子类自行实现


    _createClass(LineFeature, [{
      key: "captureWithPoint",
      value: function captureWithPoint(point) {
        var _this$layer, _this$layer$map;

        var _ref = this.shape,
            start = _ref.start,
            end = _ref.end,
            width = _ref.width;
        var mapScale = (_this$layer = this.layer) === null || _this$layer === void 0 ? void 0 : (_this$layer$map = _this$layer.map) === null || _this$layer$map === void 0 ? void 0 : _this$layer$map.getScale();
        var bufferWidth = mapScale ? 3 / mapScale : 0;
        var tolerance = isNumber_1(width) ? width / 2 + bufferWidth : bufferWidth;
        return Util.MathUtil.pointInPolyline(point, [start, end], {
          tolerance: tolerance
        });
      } // 执行绘制当前
      // @override

    }, {
      key: "refresh",
      value: function refresh() {
        // 执行坐标转换
        var _ref2 = this.shape,
            start = _ref2.start,
            end = _ref2.end,
            width = _ref2.width;

        var _this$layer$map$trans = this.layer.map.transformGlobalToScreen(start),
            startX = _this$layer$map$trans.x,
            startY = _this$layer$map$trans.y;

        var _this$layer$map$trans2 = this.layer.map.transformGlobalToScreen(end),
            endX = _this$layer$map$trans2.x,
            endY = _this$layer$map$trans2.y;

        var dpr = CanvasLayer.dpr;
        var scale = this.layer.map.getScale();
        var screenWidth = (width || 0) * scale;
        Graphic.drawLine(this.layer.canvasContext, _objectSpread2({
          start: {
            x: startX * dpr,
            y: startY * dpr
          },
          end: {
            x: endX * dpr,
            y: endY * dpr
          }
        }, isNumber_1(width) ? {
          width: screenWidth * dpr
        } : {}), this.style, {});
      }
    }]);

    return LineFeature;
  }(Feature$1);

  var PolylineFeature = /*#__PURE__*/function (_Feature) {
    _inherits(PolylineFeature, _Feature);

    var _super = _createSuper(PolylineFeature);

    // function: constructor
    function PolylineFeature(id, shape) {
      var _this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, PolylineFeature);

      _this = _super.call(this, id, EFeatureType.Polyline, props, style);
      _this.shape = shape;
      return _this;
    } // @override
    // 判断是否捕捉到当前对象，各子类自行实现


    _createClass(PolylineFeature, [{
      key: "captureWithPoint",
      value: function captureWithPoint(point) {
        var _this$layer, _this$layer$map;

        var _ref = this.shape,
            _ref$points = _ref.points,
            points = _ref$points === void 0 ? [] : _ref$points,
            width = _ref.width;
        var mapScale = (_this$layer = this.layer) === null || _this$layer === void 0 ? void 0 : (_this$layer$map = _this$layer.map) === null || _this$layer$map === void 0 ? void 0 : _this$layer$map.getScale();
        var bufferWidth = mapScale ? 3 / mapScale : 0;
        var tolerance = isNumber_1(width) ? width / 2 + bufferWidth : bufferWidth;
        return Util.MathUtil.pointInPolyline(point, points, {
          tolerance: tolerance
        });
      } // 执行绘制当前
      // @override

    }, {
      key: "refresh",
      value: function refresh() {
        var _this2 = this;

        // 执行坐标转换
        var dpr = CanvasLayer.dpr;
        var scale = this.layer.map.getScale();
        Graphic.drawPolyline(this.layer.canvasContext, this.shape, this.style, {
          format: function format(shape) {
            var points = shape.points,
                width = shape.width;
            return _objectSpread2({
              points: map_1(points, function (point) {
                var _this2$layer$map$tran = _this2.layer.map.transformGlobalToScreen(point),
                    screenX = _this2$layer$map$tran.x,
                    screenY = _this2$layer$map$tran.y;

                return {
                  x: screenX * dpr,
                  y: screenY * dpr
                };
              })
            }, isNumber_1(width) ? {
              width: width * scale * dpr
            } : {});
          }
        });
      }
    }]);

    return PolylineFeature;
  }(Feature$1);

  var RectFeature = /*#__PURE__*/function (_Feature) {
    _inherits(RectFeature, _Feature);

    var _super = _createSuper(RectFeature);

    // function: constructor
    function RectFeature(id, shape) {
      var _this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, RectFeature);

      _this = _super.call(this, id, EFeatureType.Rect, props, style);
      _this.shape = shape;
      return _this;
    } // @override
    // 判断是否捕捉到当前对象，各子类自行实现


    _createClass(RectFeature, [{
      key: "captureWithPoint",
      value: function captureWithPoint(point) {
        return Util.MathUtil.pointInRect(point, this.shape);
      } // 获取rect矩形的四个点

    }, {
      key: "getPoints",
      value: function getPoints() {
        var _ref = this.shape,
            startX = _ref.x,
            startY = _ref.y,
            width = _ref.width,
            height = _ref.height;
        var endX = startX + width;
        var endY = startY - height; // 矩形点

        return [{
          x: startX,
          y: startY
        }, {
          x: endX,
          y: startY
        }, {
          x: endX,
          y: endY
        }, {
          x: startX,
          y: endY
        }];
      } // 执行绘制当前
      // @override

    }, {
      key: "refresh",
      value: function refresh() {
        var _this2 = this;

        var dpr = CanvasLayer.dpr;
        var scale = this.layer.map.getScale();
        Graphic.drawRect(this.layer.canvasContext, this.shape, this.style, {
          format: function format(shape) {
            var x = shape.x,
                y = shape.y,
                width = shape.width,
                height = shape.height;

            var _this2$layer$map$tran = _this2.layer.map.transformGlobalToScreen({
              x: x,
              y: y
            }),
                screenX = _this2$layer$map$tran.x,
                screenY = _this2$layer$map$tran.y;

            var screenWidth = width * scale;
            var screenHeight = height * scale;
            return {
              x: screenX * dpr,
              y: screenY * dpr,
              width: screenWidth * dpr,
              height: screenHeight * dpr
            };
          }
        });
      }
    }]);

    return RectFeature;
  }(Feature$1);

  var PolygonFeature = /*#__PURE__*/function (_Feature) {
    _inherits(PolygonFeature, _Feature);

    var _super = _createSuper(PolygonFeature);

    // function: constructor
    function PolygonFeature(id, shape) {
      var _this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, PolygonFeature);

      _this = _super.call(this, id, EFeatureType.Polygon, props, style);
      _this.shape = shape;
      return _this;
    } // @override
    // 判断是否捕捉到当前对象，各子类自行实现


    _createClass(PolygonFeature, [{
      key: "captureWithPoint",
      value: function captureWithPoint(point) {
        var _ref = this.shape,
            _ref$points = _ref.points,
            points = _ref$points === void 0 ? [] : _ref$points;
        return Util.MathUtil.pointInPolygon(point, points);
      } // 执行绘制当前
      // @override

    }, {
      key: "refresh",
      value: function refresh() {
        var _this2 = this;

        // 执行坐标转换
        var _ref2 = this.shape,
            points = _ref2.points;
            _ref2.inner;
        var dpr = CanvasLayer.dpr;
        Graphic.drawPolygon(this.layer.canvasContext, points, this.style, {
          format: function format(point) {
            var _this2$layer$map$tran = _this2.layer.map.transformGlobalToScreen(point),
                screenX = _this2$layer$map$tran.x,
                screenY = _this2$layer$map$tran.y;

            return {
              x: screenX * dpr,
              y: screenY * dpr
            };
          }
        });
      }
    }]);

    return PolygonFeature;
  }(Feature$1);

  var CircleFeature = /*#__PURE__*/function (_Feature) {
    _inherits(CircleFeature, _Feature);

    var _super = _createSuper(CircleFeature);

    // PointFeature附件选项，附加字段
    // function: constructor
    function CircleFeature(id, shape) {
      var _this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var option = arguments.length > 4 ? arguments[4] : undefined;

      _classCallCheck(this, CircleFeature);

      _this = _super.call(this, id, EFeatureType.Circle, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "option", {});

      _this.shape = shape;
      _this.option = assign_1({}, CircleFeature.defaultOption, option || {});
      return _this;
    } // 根据shape设置subtype属性


    _createClass(CircleFeature, [{
      key: "getSubType",
      value: function getSubType() {
        var _ref = this.shape,
            r = _ref.r,
            sr = _ref.sr;

        if (isNumber_1(r)) {
          return EFeatureCircleSubtype.Global;
        } else if (isNumber_1(sr)) {
          return EFeatureCircleSubtype.Screen;
        }
      } // @override
      // 判断是否捕捉到当前对象，各子类自行实现

    }, {
      key: "captureWithPoint",
      value: function captureWithPoint(point) {
        var _this$layer, _this$layer$map;

        var isGlobalSubtype = this.getSubType() === EFeatureCircleSubtype.Global;
        var isScreenSubtype = this.getSubType() === EFeatureCircleSubtype.Screen;
        var _ref2 = this.shape,
            cx = _ref2.cx,
            cy = _ref2.cy,
            r = _ref2.r,
            sr = _ref2.sr;
        var mapScale = (_this$layer = this.layer) === null || _this$layer === void 0 ? void 0 : (_this$layer$map = _this$layer.map) === null || _this$layer$map === void 0 ? void 0 : _this$layer$map.getScale();
        var buffer = mapScale ? 3 / mapScale : 0;
        var tolerance = isGlobalSubtype ? r + buffer : isScreenSubtype ? sr / mapScale + buffer : buffer;
        return Util.MathUtil.pointInPoint(point, {
          x: cx,
          y: cy
        }, {
          tolerance: tolerance
        });
      } // // @override
      // // 获取最小外接矩形
      // getBounds(): IRectShape {
      //     const isGlobalSubtype = this.getSubType() === EFeatureCircleSubtype.Global;
      //     const {cx, cy, r, sr} = this.shape as ICircleShape;
      //     const radius = isGlobalSubtype ? r : (_isNumber(sr) ? sr : 0);
      //     const width = radius * 2;
      //     const height = radius * 2;
      // }
      // 获取4个边界点：如果用户传入的是sr屏幕半径坐标，则返回的点集会随视野变化发生变化

    }, {
      key: "getEdgePoints",
      value: function getEdgePoints() {
        var isGlobalSubtype = this.getSubType() === EFeatureCircleSubtype.Global;
        var isScreenSubtype = this.getSubType() === EFeatureCircleSubtype.Screen;
        var _ref3 = this.shape,
            cx = _ref3.cx,
            cy = _ref3.cy,
            r = _ref3.r,
            sr = _ref3.sr;
        var radius = isGlobalSubtype ? r : isScreenSubtype ? sr : 0;
        var halfRadius = Math.sqrt(radius * radius / 2);

        if (isGlobalSubtype) {
          return [{
            x: cx - halfRadius,
            y: cy + halfRadius
          }, // 左上
          {
            x: cx + halfRadius,
            y: cy + halfRadius
          }, // 右上
          {
            x: cx + halfRadius,
            y: cy - halfRadius
          }, // 右下
          {
            x: cx - halfRadius,
            y: cy - halfRadius
          } // 左下
          ];
        } else if (isScreenSubtype) {
          var _this$layer2, _this$layer2$map;

          var scale = (_this$layer2 = this.layer) === null || _this$layer2 === void 0 ? void 0 : (_this$layer2$map = _this$layer2.map) === null || _this$layer2$map === void 0 ? void 0 : _this$layer2$map.getScale();

          if (!scale) {
            console.error('circle getEdgePoints error: no added to layer or map');
            return [];
          }

          var globalRadius = halfRadius / scale;
          return [{
            x: cx - globalRadius,
            y: cy + globalRadius
          }, // 左上
          {
            x: cx + globalRadius,
            y: cy + globalRadius
          }, // 右上
          {
            x: cx + globalRadius,
            y: cy - globalRadius
          }, // 右下
          {
            x: cx - globalRadius,
            y: cy - globalRadius
          } // 左下
          ];
        } else {
          console.error('circle getEdgePoints error: no valid radius');
          return [];
        }
      } // 执行绘制当前
      // @override

    }, {
      key: "refresh",
      value: function refresh() {
        var _this2 = this;

        var isGlobalSubtype = this.getSubType() === EFeatureCircleSubtype.Global; // 执行坐标转换

        var _ref4 = this.shape,
            _ref4$stroke = _ref4.stroke,
            stroke = _ref4$stroke === void 0 ? true : _ref4$stroke,
            _ref4$fill = _ref4.fill,
            fill = _ref4$fill === void 0 ? false : _ref4$fill;
        var dpr = CanvasLayer.dpr;
        var scale = this.layer.map.getScale();
        Graphic.drawCircle(this.layer.canvasContext, this.shape, this.style, // style
        {
          format: function format(shape) {
            var cx = shape.cx,
                cy = shape.cy,
                r = shape.r,
                sr = shape.sr;
            var screenWidth = isGlobalSubtype ? r * scale : isNumber_1(sr) ? sr : 2;

            var _this2$layer$map$tran = _this2.layer.map.transformGlobalToScreen({
              x: cx,
              y: cy
            }),
                globalX = _this2$layer$map$tran.x,
                globalY = _this2$layer$map$tran.y;

            return {
              cx: globalX * dpr,
              cy: globalY * dpr,
              r: screenWidth * dpr
            };
          },
          stroke: stroke,
          fill: fill
        });
      }
    }]);

    return CircleFeature;
  }(Feature$1);

  _defineProperty$1(CircleFeature, "defaultOption", {
    active: false // 是否绘制选中态，默认不是选中态【内部使用/内部使用/内部使用】

  });

  var DrawActionFeature = /*#__PURE__*/function (_Action) {
    _inherits(DrawActionFeature, _Action);

    var _super = _createSuper(DrawActionFeature);

    // 当前涂抹action分类
    // function: constructor
    function DrawActionFeature(id, category, shape) {
      var _this;

      var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var style = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      _classCallCheck(this, DrawActionFeature);

      _this = _super.call(this, id, EMaskActionType.Draw, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "category", '');

      _this.shape = shape;
      _this.category = category;
      return _this;
    } // 执行绘制当前
    // @override


    _createClass(DrawActionFeature, [{
      key: "refresh",
      value: function refresh() {
        var _this2 = this;

        // 执行坐标转换
        var dpr = CanvasLayer.dpr;
        var scale = this.layer.map.getScale(); // 设置倒圆角

        var formateStyle = _objectSpread2(_objectSpread2({}, this.style || {}), {}, {
          lineCap: 'round',
          lineJoin: 'round'
        });

        Graphic.drawPolyline(this.layer.canvasContext, this.shape, formateStyle, {
          format: function format(shape) {
            var points = shape.points,
                width = shape.width;
            return _objectSpread2({
              points: map_1(points, function (point) {
                var _this2$layer$map$tran = _this2.layer.map.transformGlobalToScreen(point),
                    screenX = _this2$layer$map$tran.x,
                    screenY = _this2$layer$map$tran.y;

                return {
                  x: screenX * dpr,
                  y: screenY * dpr
                };
              })
            }, isNumber_1(width) ? {
              width: width * scale * dpr
            } : {});
          }
        });
      }
    }]);

    return DrawActionFeature;
  }(Action);

  var ETextType;

  (function (ETextType) {
    ETextType["Text"] = "TEXT";
  })(ETextType || (ETextType = {}));

  var Text = /*#__PURE__*/function () {
    // textId
    // textType
    // props
    // text-container

    /**
     * props: feature样式
     * defaultStyle: 默认配置项
     * style: userFeatureStyle merge defaultStyle
    */

    /**
     * props: text文本
     * defaultTextInfo: 默认文本配置项
     * style: userTextInfo merge defaultTextInfo
    */
    // function: constructor
    function Text(id, text) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, Text);

      this.id = id;
      this.type = ETextType.Text;
      this.props = props;
      this.textInfo = assign_1({}, Text.defaultTextInfo, text);
      this.style = assign_1({}, Text.defaultStyle, style);
    } // function: trigger when feature add to featureLayer


    _createClass(Text, [{
      key: "onAdd",
      value: function onAdd(layer) {
        this.layer = layer;
        this.refresh();
      } // trigger when control remove from layer
      // layer exits first

    }, {
      key: "onRemove",
      value: function onRemove() {} // 刷新当前数据

    }, {
      key: "refresh",
      value: function refresh() {
        var _this = this;

        var textInfo = this.textInfo;
        var dpr = CanvasLayer.dpr;
        Graphic.drawText(this.layer.canvasContext, textInfo, this.style, {
          format: function format(info) {
            var position = info.position,
                offset = info.offset;

            var _this$layer$map$trans = _this.layer.map.transformGlobalToScreen(position),
                screenX = _this$layer$map$trans.x,
                screenY = _this$layer$map$trans.y;

            var offsetX = offset.x,
                offsetY = offset.y;
            return _objectSpread2(_objectSpread2({}, info), {}, {
              position: {
                x: screenX * dpr,
                y: screenY * dpr
              },
              offset: {
                x: offsetX * dpr,
                y: offsetY * dpr
              }
            });
          }
        });
      } // 打印测试输出

    }, {
      key: "printInfo",
      value: function printInfo() {}
    }]);

    return Text;
  }();

  _defineProperty$1(Text, "defaultStyle", {
    opacity: 1,
    strokeStyle: '#FF0000',
    background: true,
    // 是否有背景色
    fontColor: '#FFFFFF',
    // 字体颜色
    fillStyle: '#FF0000',
    font: 'normal 12px Arial',
    textAlign: 'left',
    textBaseline: 'bottom'
  });

  _defineProperty$1(Text, "defaultTextInfo", {
    text: '',
    position: {
      x: 0,
      y: 0
    },
    // 文本位置
    offset: {
      x: 0,
      y: 0
    } // 文本偏移量

  });

  var OverlayLayer = /*#__PURE__*/function (_CanvasLayer) {
    _inherits(OverlayLayer, _CanvasLayer);

    var _super = _createSuper(OverlayLayer);

    // 当前featureLayer中所有的features
    // 默认active的样式
    // function: constructor
    function OverlayLayer(id) {
      var _this;

      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, OverlayLayer);

      _this = _super.call(this, id, ELayerType.Overlay, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "featureActions", []);

      _defineProperty$1(_assertThisInitialized(_this), "defaultActiveFeatureStyle", {
        strokeStyle: '#FF0000',
        fillStyle: '#FF0000',
        lineWidth: 1
      });

      return _this;
    } // 添加feature至当前FeatureLayer中


    _createClass(OverlayLayer, [{
      key: "addFeatureActionText",
      value: function addFeatureActionText(feature, option) {
        var _ref = option || {},
            _ref$clear = _ref.clear,
            clear = _ref$clear === void 0 ? false : _ref$clear;

        clear && this.clear();
        feature.onAdd(this);
        this.featureActions.push(feature);
      } // 添加point

    }, {
      key: "addPointFeature",
      value: function addPointFeature(shape) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var style = option.style,
            _option$clear = option.clear,
            clear = _option$clear === void 0 ? true : _option$clear,
            _option$active = option.active,
            active = _option$active === void 0 ? false : _option$active;
        var feature = new PointFeature("".concat(+new Date()), // id
        shape, // shape
        {}, // props
        style || this.map.drawingStyle, // style
        {
          active: active
        });
        this.addFeatureActionText(feature, {
          clear: clear
        });
      } // 添加line

    }, {
      key: "addLineFeature",
      value: function addLineFeature(shape) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var style = option.style,
            _option$clear2 = option.clear,
            clear = _option$clear2 === void 0 ? true : _option$clear2;
        var feature = new LineFeature("".concat(+new Date()), // id
        shape, // shape
        {}, // props
        style || this.map.drawingStyle);
        this.addFeatureActionText(feature, {
          clear: clear
        });
      } // 添加polyline

    }, {
      key: "addPolylineFeature",
      value: function addPolylineFeature(shape) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var style = option.style,
            _option$clear3 = option.clear,
            clear = _option$clear3 === void 0 ? true : _option$clear3;
        var feature = new PolylineFeature("".concat(+new Date()), // id
        shape, // shape
        {}, // props
        style || this.map.drawingStyle);
        this.addFeatureActionText(feature, {
          clear: clear
        });
      } // 添加rect

    }, {
      key: "addRectFeature",
      value: function addRectFeature(shape) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var style = option.style,
            _option$clear4 = option.clear,
            clear = _option$clear4 === void 0 ? true : _option$clear4;
        var feature = new RectFeature("".concat(+new Date()), // id
        shape, // shape
        {}, // props
        style || this.map.drawingStyle);
        this.addFeatureActionText(feature, {
          clear: clear
        });
      } // 添加polygon

    }, {
      key: "addPolygonFeature",
      value: function addPolygonFeature(shape) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var style = option.style,
            _option$clear5 = option.clear,
            clear = _option$clear5 === void 0 ? true : _option$clear5;
        var feature = new PolygonFeature( // 为了非闭合多段线
        "".concat(+new Date()), // id
        shape, // shape
        {}, // props
        style || this.map.drawingStyle);
        this.addFeatureActionText(feature, {
          clear: clear
        });
      } // 添加circle

    }, {
      key: "addCircleFeature",
      value: function addCircleFeature(shape, option) {
        var _ref2 = option || {},
            _ref2$clear = _ref2.clear,
            clear = _ref2$clear === void 0 ? true : _ref2$clear,
            style = _ref2.style,
            _ref2$active = _ref2.active,
            active = _ref2$active === void 0 ? false : _ref2$active;

        var feature = new CircleFeature("".concat(+new Date()), // id
        shape, // shape
        {}, // props
        style || this.map.drawingStyle, // style
        {
          active: active
        });
        this.addFeatureActionText(feature, {
          clear: clear
        });
      } // 添加涂抹action

    }, {
      key: "addDrawAction",
      value: function addDrawAction(shape) {
        var action = new DrawActionFeature("".concat(+new Date()), // id
        'drawAction', shape, // shape
        {}, // props
        this.map.drawingStyle // style
        );
        this.addFeatureActionText(action, {
          clear: true
        });
      } // 添加文本

    }, {
      key: "addText",
      value: function addText(textInfo, option) {
        var _ref3 = option || {},
            _ref3$clear = _ref3.clear,
            clear = _ref3$clear === void 0 ? true : _ref3$clear;

        var text = new Text("".concat(+new Date()), // id
        _objectSpread2(_objectSpread2({}, textInfo), {}, {
          offset: {
            x: 5,
            y: -5
          }
        }), // shape
        {}, // props
        {
          fillStyle: '#FFFFFF',
          strokeStyle: '#D2691E',
          background: true,
          globalAlpha: 1,
          fontColor: '#333',
          font: 'normal 10px Arial',
          textBaseline: 'top'
        } // style
        );
        this.addFeatureActionText(text, {
          clear: clear
        });
      } // 绘制当前activeFeature

    }, {
      key: "addActiveFeature",
      value: function addActiveFeature(feature) {
        // 高亮的样式
        var style = this.defaultActiveFeatureStyle; // 做一下深度克隆，避免原有feature被污染[暂时不做克隆，效率太低]
        // const activeFeature = _cloneDeep(feature);

        var type = feature.type,
            shape = feature.shape;

        switch (type) {
          case EFeatureType.Point:
            {
              // this.addLineFeature(shape, {style});
              // const {start, end} = shape as ILineShape;
              // this.addActivePoints([start, end], {withCenterPoint: false});
              this.addPointFeature(shape, {
                style: style,
                active: true
              });
              break;
            }

          case EFeatureType.Line:
            {
              this.addLineFeature(shape, {
                style: style
              });
              var _ref4 = shape,
                  start = _ref4.start,
                  end = _ref4.end;
              this.addActivePoints([start, end], {
                withCenterPoint: false
              });
              break;
            }

          case EFeatureType.Polyline:
            {
              this.addPolylineFeature(shape, {
                style: style
              });
              this.addActivePoints(shape.points, {
                withCenterPoint: true
              });
              break;
            }

          case EFeatureType.Rect:
            {
              this.addRectFeature(shape, {
                style: style
              });
              var rectPoints = feature.getPoints();
              this.addActivePoints(rectPoints, {
                withCenterPoint: false
              });
              break;
            }

          case EFeatureType.Polygon:
            {
              this.addPolygonFeature(shape, {
                style: style
              });
              this.addActivePoints(shape.points, {
                withCenterPoint: true
              });
              break;
            }

          case EFeatureType.Circle:
            {
              this.addCircleFeature(shape, {
                style: style
              });
              var edgePoints = feature.getEdgePoints();
              this.addActivePoints(edgePoints, {
                withCenterPoint: false
              });
              break;
            }
        }
      } // 绘制高亮点

    }, {
      key: "addActivePoints",
      value: function addActivePoints(points) {
        var _this2 = this;

        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        // withCenterPoint是否绘制节点中心点
        var _option$withCenterPoi = option.withCenterPoint,
            withCenterPoint = _option$withCenterPoi === void 0 ? false : _option$withCenterPoi;

        forEach_1(points, function (point, index) {
          var x1 = point.x,
              y1 = point.y;

          _this2.addCircleFeature({
            sr: 3,
            cx: x1,
            cy: y1,
            stroke: false,
            fill: true
          }, {
            clear: false,
            style: {
              fillStyle: '#FF0000'
            }
          });

          if (withCenterPoint) {
            var nextPoint = points[index + 1] || points[0];

            var _Util$MathUtil$getMid = Util.MathUtil.getMiddlePoint(point, nextPoint),
                middleX = _Util$MathUtil$getMid.x,
                middleY = _Util$MathUtil$getMid.y;

            _this2.addCircleFeature({
              sr: 3,
              cx: middleX,
              cy: middleY,
              stroke: false,
              fill: true
            }, {
              clear: false,
              style: {
                fillStyle: '#FFDEAD'
              }
            });
          }
        });
      } // @override

    }, {
      key: "refresh",
      value: function refresh() {
        _get(_getPrototypeOf(OverlayLayer.prototype), "refresh", this).call(this);

        forEach_1(this.featureActions, function (featureAction) {
          return featureAction.refresh();
        });
      }
    }]);

    return OverlayLayer;
  }(CanvasLayer);

  var MarkerLayer = /*#__PURE__*/function (_Layer) {
    _inherits(MarkerLayer, _Layer);

    var _super = _createSuper(MarkerLayer);

    // 当前MarkerLayer中所有的markers
    // function: constructor
    function MarkerLayer(id) {
      var _this;

      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, MarkerLayer);

      _this = _super.call(this, id, ELayerType.Marker, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "markers", []);

      return _this;
    } // 添加marker至当前MarkerLayer中


    _createClass(MarkerLayer, [{
      key: "addMarker",
      value: function addMarker(marker, option) {
        marker.onAdd(this);
        this.markers.push(marker);
      } // 删除marker

    }, {
      key: "removeMarkerById",
      value: function removeMarkerById(targetMarkerId) {
        var newMarkers = filter_1(this.markers, function (marker) {
          var markerId = marker.id;

          if (markerId === targetMarkerId) {
            marker.onRemove();
            return false;
          }

          return true;
        }); // 重新设置最新的markers


        this.markers = newMarkers;
        this.refresh();
      } // 删除所有markers

    }, {
      key: "removeAllMarkers",
      value: function removeAllMarkers() {
        var newMarkers = filter_1(this.markers, function (marker) {
          marker.onRemove();
          return false;
        }); // 重新设置最新的markers


        this.markers = newMarkers;
        this.refresh();
      } // @override 重写container大小，设置为0

    }, {
      key: "resize",
      value: function resize() {
        this.dom.style.width = '0px';
        this.dom.style.height = '0px';
      } // @override

    }, {
      key: "refresh",
      value: function refresh() {
        _get(_getPrototypeOf(MarkerLayer.prototype), "refresh", this).call(this);

        forEach_1(this.markers, function (marker) {
          return marker.refresh();
        });
      }
    }]);

    return MarkerLayer;
  }(Layer$1);

  var Map = /*#__PURE__*/function () {
    // props: domId / dom
    // props: layerDomId / layerDom
    // props: platformDomId / platformDom
    // props: layerDom2Id / layerDom2
    // props: controlDomId / controlDom

    /**
     * props: map可选初始化配置项
     * defaultMapOptions: 默认配置项
     * mapOptions: userMapOptions merge defaultMapOptions
    */
    // 左上角代表的实际坐标值
    // 当前map中包含的layers
    // 绘制状态下相关样式设置
    // 当前选中的激活feature对象
    // function: constructor
    function Map(domId, mapOptions) {
      var _this = this;

      _classCallCheck(this, Map);

      _defineProperty$1(this, "layers", []);

      _defineProperty$1(this, "drawingStyle", {});

      _defineProperty$1(this, "activeFeature", null);

      _defineProperty$1(this, "events", {
        on: function on(eventType, callback) {
          _this.eventsObServer.on(eventType, callback);
        }
      });

      this.domId = domId;
      this.dom = document.getElementById(domId);
      this.mapOptions = assign_1({}, Map.defaultMapOptions, mapOptions);
      this.zoom = this.mapOptions.zoom; // 更新初始zoom

      this.center = this.mapOptions.center; // 更新初始origin

      this.mode = this.mapOptions.mode; // 更新初始map操作模式
      // 设置容器样式

      this.setDomStyle(); // 分别创建platformContainer/layerContainer/controlCOntainer

      this.createSubDoms(); // 添加overlayLayer至当前map，最终会被添加至platform层

      this.addOverlayLayer(); // 添加eventLayer至当前map，最终会被添加至platform层

      this.addEventLayer(); // 添加markerLayer至当前map，最终会被添加至platform层

      this.addMarkerLayer(); // 事件监听实例添加

      this.eventsObServer = new events.EventEmitter();
    } // 设置dom容器的style样式


    _createClass(Map, [{
      key: "setDomStyle",
      value: function setDomStyle() {
        this.dom.ondragstart = function (e) {
          e.preventDefault();
          e.stopPropagation();
        };

        this.dom.oncontextmenu = function (e) {
          e.preventDefault();
          e.stopPropagation();
        };
      } // 设置当前mapMode模式

    }, {
      key: "setMode",
      value: function setMode(mode) {
        this.mode = mode;
        this.eventLayer.reset(); // 切换mode时，需要取消activeFeature的选中

        if (this.activeFeature) {
          this.eventsObServer.emit(EEventType.FeatureUnselected, this.activeFeature, 'cancel by switch mode');
        }
      } // 设置当前map绘制状态样式

    }, {
      key: "setDrawingStyle",
      value: function setDrawingStyle(drawingStyle) {
        this.drawingStyle = drawingStyle;
      } // 获取dom宽高（width/height）

    }, {
      key: "getSize",
      value: function getSize() {
        return this.mapOptions.size || {
          width: get_1(this.dom, 'clientWidth', 0),
          height: get_1(this.dom, 'clientHeight', 0)
        };
      } // 获取当前的缩放值

    }, {
      key: "getScale",
      value: function getScale(zoom) {
        var scaleZoom = isNumber_1(zoom) ? zoom : this.zoom;
        var dot = 1000000; // 小数点6位数

        var _this$getSize = this.getSize(),
            width = _this$getSize.width;

        var scale = parseInt(width * dot / scaleZoom + '', 10) / dot;
        return scale;
      } // 设置实际坐标系center

    }, {
      key: "setCenter",
      value: function setCenter(center) {
        this.center = center;
        this.refresh();
        this.triggerBoundsChanged();
        return this;
      } // 获取实际坐标系center

    }, {
      key: "getCenter",
      value: function getCenter() {
        return this.center;
      } // 获取屏幕中心点坐标

    }, {
      key: "getScreenCenter",
      value: function getScreenCenter() {
        var _this$getSize2 = this.getSize(),
            width = _this$getSize2.width,
            height = _this$getSize2.height;

        return {
          x: width / 2,
          y: height / 2
        };
      } // 获取当前视野范围

    }, {
      key: "getBounds",
      value: function getBounds(option) {
        var _this$getSize3 = this.getSize(),
            width = _this$getSize3.width,
            height = _this$getSize3.height;

        var _this$transformScreen = this.transformScreenToGlobal({
          x: 0,
          y: 0
        }),
            ltx = _this$transformScreen.x,
            lty = _this$transformScreen.y;

        var _this$transformScreen2 = this.transformScreenToGlobal({
          x: width,
          y: height
        }),
            rtx = _this$transformScreen2.x,
            rty = _this$transformScreen2.y;

        return {
          x: ltx,
          y: lty,
          width: rtx - ltx,
          height: lty - rty
        };
      } // 定位且zoom到指定zoom值

    }, {
      key: "centerAndZoom",
      value: function centerAndZoom(options) {
        var center = options.center,
            zoom = options.zoom;
        center && (this.center = center);
        isNumber_1(zoom) && (this.zoom = zoom);
        this.refresh();
        this.triggerBoundsChanged();
        return this;
      } // 放大-中心点放大

    }, {
      key: "zoomIn",
      value: function zoomIn() {
        this.zoom = this.zoom / 2;
        this.refresh();
        this.triggerBoundsChanged();
      } // 缩小

    }, {
      key: "zoomOut",
      value: function zoomOut() {
        this.zoom = this.zoom * 2;
        this.refresh();
        this.triggerBoundsChanged();
      } // 添加layer至当前map容器

    }, {
      key: "addLayer",
      value: function addLayer(layer) {
        // 首先将layer-dom-append到容器中
        var layerDom = layer.dom;
        this.layerDom.appendChild(layerDom); // 然后调用layer的onAdd方法

        layer.onAdd(this); // 添加对象layers中

        this.layers.push(layer);
      } // 删除指定layer

    }, {
      key: "removeLayerById",
      value: function removeLayerById(targetLayerId) {
        var newLayers = filter_1(this.layers, function (layer) {
          var layerId = layer.id;

          if (layerId === targetLayerId) {
            layer.onRemove();
            return false;
          }

          return true;
        }); // 重新设置最新的layers


        this.layers = newLayers; // 执行重绘刷新

        this.refresh();
      } // 删除所有layer[除内置layers]

    }, {
      key: "removeAllLayers",
      value: function removeAllLayers() {
        var newLayers = filter_1(this.layers, function (layer) {
          layer.onRemove();
          return false;
        }); // 重新设置最新的layers


        this.layers = newLayers; // 执行重绘刷新

        this.refresh();
      } // 获取所有手动添加的layers

    }, {
      key: "getLayers",
      value: function getLayers() {
        return this.layers;
      } // 触发视野范围变化回调

    }, {
      key: "triggerBoundsChanged",
      value: function triggerBoundsChanged() {
        var _this2 = this;

        // 通知上层视野范围发生变化
        if (this.boundsChangedTimer) {
          window.clearTimeout(this.boundsChangedTimer);
          this.boundsChangedTimer = null;
        }

        this.boundsChangedTimer = window.setTimeout(function () {
          _this2.eventsObServer.emit(EEventType.BoundsChanged);
        }, 666);
      } // 刷新当前视图

    }, {
      key: "refresh",
      value: function refresh() {
        // 用户加入layer刷新
        forEach_1(this.layers, function (layer) {
          return layer.refresh();
        }); // markerLayer也要伴随刷新


        this.markerLayer.refresh();
      } // 设置当前active的feature

    }, {
      key: "setActiveFeature",
      value: function setActiveFeature(feature) {
        this.activeFeature = feature; // 如果不存在feature，则清空overLayer, 否则添加activeFeature

        feature && this.overlayLayer.addActiveFeature(feature);
        !feature && this.overlayLayer.clear(); // 主动触发一次mouseMove事件

        var mouseMoveEvent = this.eventLayer.mouseMoveEvent;
        mouseMoveEvent && this.eventLayer.onMouseMove(mouseMoveEvent);
      } // 获取当前active的feature

    }, {
      key: "getActiveFeature",
      value: function getActiveFeature() {
        return this.activeFeature;
      } // 屏幕坐标转换全局【实际】坐标，默认基于中心点基准point进行计算

    }, {
      key: "transformScreenToGlobal",
      value: function transformScreenToGlobal(screenPoint, options) {
        var _ref = options || {},
            basePoint = _ref.basePoint,
            zoom = _ref.zoom;

        var scale = this.getScale(zoom);

        var _this$getScreenCenter = this.getScreenCenter(),
            screenCenterX = _this$getScreenCenter.x,
            screenCenterY = _this$getScreenCenter.y;

        var screenX = screenPoint.x,
            screenY = screenPoint.y;

        var screenBasePointX = get_1(basePoint, 'screen.x', screenCenterX);

        var screenBasePointY = get_1(basePoint, 'screen.y', screenCenterY);

        var _get2 = get_1(basePoint, 'global', this.center),
            basePointX = _get2.x,
            basePointY = _get2.y;

        var dltScreenX = screenX - screenBasePointX;
        var dltScreenY = screenY - screenBasePointY;
        return {
          x: basePointX + dltScreenX / scale,
          y: basePointY - dltScreenY / scale
        };
      } // 全局【实际】坐标转换屏幕坐标，默认基于中心点基准point进行计算

    }, {
      key: "transformGlobalToScreen",
      value: function transformGlobalToScreen(globalPoint, options) {
        var _ref2 = options || {},
            basePoint = _ref2.basePoint,
            zoom = _ref2.zoom;

        var scale = this.getScale(zoom);

        var _this$getScreenCenter2 = this.getScreenCenter(),
            screenCenterX = _this$getScreenCenter2.x,
            screenCenterY = _this$getScreenCenter2.y;

        var globalX = globalPoint.x,
            globalY = globalPoint.y;

        var screenBasePointX = get_1(basePoint, 'screen.x', screenCenterX);

        var screenBasePointY = get_1(basePoint, 'screen.y', screenCenterY);

        var _get3 = get_1(basePoint, 'global', this.center),
            basePointX = _get3.x,
            basePointY = _get3.y;

        var dltGlobalX = globalX - basePointX;
        var dltGlobalY = globalY - basePointY;
        return {
          x: screenBasePointX + dltGlobalX * scale,
          y: screenBasePointY - dltGlobalY * scale
        };
      } // 创建map容器下相关的container

    }, {
      key: "createSubDoms",
      value: function createSubDoms() {
        this.setLayerDom();
        this.setPlatformDom();
        this.setLayerDom2();
        this.setControlDom();
      } // 创建图层container

    }, {
      key: "setLayerDom",
      value: function setLayerDom() {
        var _this$getSize4 = this.getSize(),
            width = _this$getSize4.width,
            height = _this$getSize4.height;

        this.layerDomId = "layer-wrapper-".concat(uniqueId_1());
        this.layerDom = document.createElement('div');
        this.layerDom.setAttribute('id', this.layerDomId);
        this.layerDom.style.position = 'absolute';
        this.layerDom.style.left = '0';
        this.layerDom.style.top = '0';
        this.layerDom.style.width = "".concat(width, "px");
        this.layerDom.style.height = "".concat(height, "px");
        this.layerDom.style.zIndex = '1'; // add this.layerDom to dom

        this.dom.appendChild(this.layerDom);
      } // 创建platform平台container[不会进行位置的移动]

    }, {
      key: "setPlatformDom",
      value: function setPlatformDom() {
        var _this$getSize5 = this.getSize(),
            width = _this$getSize5.width,
            height = _this$getSize5.height;

        this.platformDomId = "platform-wrapper-".concat(uniqueId_1());
        this.platformDom = document.createElement('div');
        this.platformDom.setAttribute('id', this.platformDomId);
        this.platformDom.style.position = 'absolute';
        this.platformDom.style.left = '0';
        this.platformDom.style.top = '0';
        this.platformDom.style.width = "".concat(width, "px");
        this.platformDom.style.height = "".concat(height, "px");
        this.platformDom.style.zIndex = '5'; // add this.platformDom to dom

        this.dom.appendChild(this.platformDom);
      } // 创建layer控件container【不同于setLayerDom的是：此容器width=0, height=0】

    }, {
      key: "setLayerDom2",
      value: function setLayerDom2() {
        this.layerDom2Id = "layer2-wrapper-".concat(uniqueId_1());
        this.layerDom2 = document.createElement('div');
        this.layerDom2.setAttribute('id', this.layerDom2Id);
        this.layerDom2.style.position = 'absolute';
        this.layerDom2.style.left = '0';
        this.layerDom2.style.right = '0';
        this.layerDom2.style.width = '0';
        this.layerDom2.style.height = '0';
        this.layerDom2.style.zIndex = '10'; // add this.layerDom2 to dom

        this.dom.appendChild(this.layerDom2);
      } // 创建control控件container

    }, {
      key: "setControlDom",
      value: function setControlDom() {
        this.controlDomId = "control-wrapper-".concat(uniqueId_1());
        this.controlDom = document.createElement('div');
        this.controlDom.setAttribute('id', this.controlDomId);
        this.controlDom.style.position = 'absolute';
        this.controlDom.style.left = '0';
        this.controlDom.style.right = '0';
        this.controlDom.style.width = '0';
        this.controlDom.style.height = '0';
        this.controlDom.style.zIndex = '15'; // add this.controlDom to dom

        this.dom.appendChild(this.controlDom);
      } // 添加eventLayer至当前map

    }, {
      key: "addEventLayer",
      value: function addEventLayer() {
        // 实例化eventLayer
        this.eventLayer = new MaskLayer$1("event-".concat(uniqueId_1()), {}, {
          zIndex: 5
        }); // 首先将layer-dom-append到容器中

        this.platformDom.appendChild(this.eventLayer.dom);
        this.eventLayer.onAdd(this);
      } // 添加overlayLayer至当前map

    }, {
      key: "addOverlayLayer",
      value: function addOverlayLayer() {
        // 实例化overlayLayer
        this.overlayLayer = new OverlayLayer("overlay-".concat(uniqueId_1()), {}, {
          zIndex: 1
        }); // 首先将layer-dom-append到容器中

        this.platformDom.appendChild(this.overlayLayer.dom);
        this.overlayLayer.onAdd(this);
      } // 添加markerLayer至当前map

    }, {
      key: "addMarkerLayer",
      value: function addMarkerLayer() {
        // 实例化markerLayer
        this.markerLayer = new MarkerLayer("marker-".concat(uniqueId_1()), {}, {
          zIndex: 10
        }); // 首先将layer-dom-append到容器中

        this.layerDom2.appendChild(this.markerLayer.dom);
        this.markerLayer.onAdd(this);
      } // setCursor

    }, {
      key: "setCursor",
      value: function setCursor(cursor) {
        this.platformDom.style.cursor = cursor;
        return this;
      } // setUrlCursor

    }, {
      key: "setUrlCursor",
      value: function setUrlCursor(cursor) {
        return this;
      } // map-dragging时调用，在平移时调用

    }, {
      key: "onDrag",
      value: function onDrag(dltX, dltY) {
        this.layerDom.style.left = "".concat(dltX, "px");
        this.layerDom.style.top = "".concat(dltY, "px");
        this.layerDom2.style.left = "".concat(dltX, "px");
        this.layerDom2.style.top = "".concat(dltY, "px");
      } // 复位

    }, {
      key: "reset",
      value: function reset() {
        this.layerDom.style.left = '0';
        this.layerDom.style.top = '0';
        this.layerDom2.style.left = '0';
        this.layerDom2.style.top = '0';
        return this;
      } // 用户事件添加

    }, {
      key: "printInfo",
      value: // 打印测试输出
      function printInfo() {}
    }]);

    return Map;
  }();

  _defineProperty$1(Map, "defaultMapOptions", {
    center: {
      x: 0,
      y: 0
    },
    // 中心点坐标
    zoom: 1000,
    // 缩放值
    mode: EMapMode.Pan,
    // 默认当前map模式
    size: null // 可自定义容器宽/高，默认取dom: clientWidth/clientHeight

  });

  var ImageLayer = /*#__PURE__*/function (_CanvasLayer) {
    _inherits(ImageLayer, _CanvasLayer);

    var _super = _createSuper(ImageLayer);

    /**
     * props: image可选初始化配置项
     * defaultImageInfo: 默认配置项
     * image: userImage merge defaultImageInfo
    */
    // 图片当前的位置
    // function: constructor
    function ImageLayer(id, image) {
      var _this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, ImageLayer);

      _this = _super.call(this, id, ELayerType.Image, props, style);
      _this.imageInfo = assign_1({}, ImageLayer.defaultImageInfo, image);
      _this.position = _this.imageInfo.position;

      _this.updateImage();

      return _this;
    } // 更新图片信息


    _createClass(ImageLayer, [{
      key: "updateImageInfo",
      value: function updateImageInfo(image) {
        this.imageInfo = assign_1({}, this.imageInfo, image);
        image.position && (this.position = this.imageInfo.position);
        image.src && this.updateImage();
        this.refresh();
      } // 更新image对象

    }, {
      key: "updateImage",
      value: function updateImage() {
        var _this2 = this;

        if (this.imageInfo.src) {
          this.image = new Image();
          this.image.src = this.imageInfo.src;

          this.image.onload = function () {
            return _this2.refresh();
          };
        }
      } // @override

    }, {
      key: "onAdd",
      value: function onAdd(map) {
        _get(_getPrototypeOf(ImageLayer.prototype), "onAdd", this).call(this, map);

        this.refresh();
      } // 绘制image信息

    }, {
      key: "drawImage",
      value: function drawImage() {
        // 执行坐标转换
        var _this$map$transformGl = this.map.transformGlobalToScreen(this.position),
            screenX = _this$map$transformGl.x,
            screenY = _this$map$transformGl.y;

        var dpr = CanvasLayer.dpr;
        var scale = this.map.getScale();
        var _this$imageInfo = this.imageInfo,
            width = _this$imageInfo.width,
            height = _this$imageInfo.height;
        var screenWidth = width * scale;
        var screenHeight = height * scale;
        Graphic.drawImage(this.canvasContext, {
          image: this.image,
          x: screenX * dpr,
          y: screenY * dpr,
          width: screenWidth * dpr,
          height: screenHeight * dpr
        }, {});
      } // @override

    }, {
      key: "refresh",
      value: function refresh() {
        _get(_getPrototypeOf(ImageLayer.prototype), "refresh", this).call(this);

        this.drawImage();
      }
    }]);

    return ImageLayer;
  }(CanvasLayer);

  _defineProperty$1(ImageLayer, "defaultImageInfo", {
    src: '',
    width: 0,
    height: 0,
    position: {
      x: 0,
      y: 0
    } // 默认起始位置

  });

  var FeatureLayer = /*#__PURE__*/function (_CanvasLayer) {
    _inherits(FeatureLayer, _CanvasLayer);

    var _super = _createSuper(FeatureLayer);

    // 当前featureLayer中所有的features
    // function: constructor
    function FeatureLayer(id) {
      var _this;

      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, FeatureLayer);

      _this = _super.call(this, id, ELayerType.Feature, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "features", []);

      return _this;
    } // 添加feature至当前FeatureLayer中


    _createClass(FeatureLayer, [{
      key: "addFeature",
      value: function addFeature(feature, option) {
        var _ref = option || {},
            _ref$clear = _ref.clear,
            clear = _ref$clear === void 0 ? false : _ref$clear;

        if (clear) {
          this.features = [];
          this.clear();
        }

        feature.onAdd(this);
        this.features.push(feature);
      } // 删除feature

    }, {
      key: "removeFeatureById",
      value: function removeFeatureById(targetFeatureId) {
        var newFeatures = filter_1(this.features, function (feature) {
          var featureId = feature.id;

          if (featureId === targetFeatureId) {
            feature.onRemove();
            return false;
          }

          return true;
        }); // 重新设置最新的features


        this.features = newFeatures; // 执行重绘刷新

        this.refresh();
      } // 删除所有features

    }, {
      key: "removeAllFeatures",
      value: function removeAllFeatures() {
        var newFeatures = filter_1(this.features, function (feature) {
          feature.onRemove();
          return false;
        }); // 重新设置最新的features


        this.features = newFeatures; // 执行重绘刷新

        this.refresh();
      } // 根据点获取命中的feature

    }, {
      key: "getTargetFeatureWithPoint",
      value: function getTargetFeatureWithPoint(point) {
        var targetFeatures = []; // 为了以后命中多个的返回判断

        forEach_1(this.features, function (feature) {
          var captured = feature.captureWithPoint(point);

          if (captured) {
            targetFeatures.push(feature);
            return false; // 中断玄幻
          }
        });

        return get_1(targetFeatures, '[0]', null);
      } // @override

    }, {
      key: "refresh",
      value: function refresh() {
        _get(_getPrototypeOf(FeatureLayer.prototype), "refresh", this).call(this);

        forEach_1(this.features, function (feature) {
          return feature.refresh();
        });
      }
    }]);

    return FeatureLayer;
  }(CanvasLayer);

  var baseIndexOf = _baseIndexOf;

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes$1(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  var _arrayIncludes = arrayIncludes$1;

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */

  function arrayIncludesWith$1(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  var _arrayIncludesWith = arrayIncludesWith$1;

  /**
   * This method returns `undefined`.
   *
   * @static
   * @memberOf _
   * @since 2.3.0
   * @category Util
   * @example
   *
   * _.times(2, _.noop);
   * // => [undefined, undefined]
   */

  function noop$1() {
    // No operation performed.
  }

  var noop_1 = noop$1;

  var Set = _Set,
      noop = noop_1,
      setToArray$1 = _setToArray;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /**
   * Creates a set object of `values`.
   *
   * @private
   * @param {Array} values The values to add to the set.
   * @returns {Object} Returns the new set.
   */
  var createSet$1 = !(Set && (1 / setToArray$1(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
    return new Set(values);
  };

  var _createSet = createSet$1;

  var SetCache = _SetCache,
      arrayIncludes = _arrayIncludes,
      arrayIncludesWith = _arrayIncludesWith,
      cacheHas = _cacheHas,
      createSet = _createSet,
      setToArray = _setToArray;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * The base implementation of `_.uniqBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   */
  function baseUniq$1(array, iteratee, comparator) {
    var index = -1,
        includes = arrayIncludes,
        length = array.length,
        isCommon = true,
        result = [],
        seen = result;

    if (comparator) {
      isCommon = false;
      includes = arrayIncludesWith;
    }
    else if (length >= LARGE_ARRAY_SIZE) {
      var set = iteratee ? null : createSet(array);
      if (set) {
        return setToArray(set);
      }
      isCommon = false;
      includes = cacheHas;
      seen = new SetCache;
    }
    else {
      seen = iteratee ? [] : result;
    }
    outer:
    while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value) : value;

      value = (comparator || value !== 0) ? value : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      }
      else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
    return result;
  }

  var _baseUniq = baseUniq$1;

  var baseUniq = _baseUniq;

  /**
   * Creates a duplicate-free version of an array, using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons, in which only the first occurrence of each element
   * is kept. The order of result values is determined by the order they occur
   * in the array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @returns {Array} Returns the new duplicate free array.
   * @example
   *
   * _.uniq([2, 1, 2]);
   * // => [2, 1]
   */
  function uniq(array) {
    return (array && array.length) ? baseUniq(array) : [];
  }

  var uniq_1 = uniq;

  var copyObject$3 = _copyObject,
      keys$1 = keys_1;

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign$1(object, source) {
    return object && copyObject$3(source, keys$1(source), object);
  }

  var _baseAssign = baseAssign$1;

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function nativeKeysIn$1(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  var _nativeKeysIn = nativeKeysIn$1;

  var isObject$2 = isObject_1,
      isPrototype$1 = _isPrototype,
      nativeKeysIn = _nativeKeysIn;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn$1(object) {
    if (!isObject$2(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype$1(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$1.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeysIn = baseKeysIn$1;

  var arrayLikeKeys = _arrayLikeKeys,
      baseKeysIn = _baseKeysIn,
      isArrayLike = isArrayLike_1;

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn$3(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  var keysIn_1 = keysIn$3;

  var copyObject$2 = _copyObject,
      keysIn$2 = keysIn_1;

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn$1(object, source) {
    return object && copyObject$2(source, keysIn$2(source), object);
  }

  var _baseAssignIn = baseAssignIn$1;

  var _cloneBuffer = {exports: {}};

  (function (module, exports) {
  var root = _root;

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined,
      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

    buffer.copy(result);
    return result;
  }

  module.exports = cloneBuffer;
  }(_cloneBuffer, _cloneBuffer.exports));

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */

  function copyArray$1(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  var _copyArray = copyArray$1;

  var copyObject$1 = _copyObject,
      getSymbols$1 = _getSymbols;

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols$1(source, object) {
    return copyObject$1(source, getSymbols$1(source), object);
  }

  var _copySymbols = copySymbols$1;

  var overArg = _overArg;

  /** Built-in value references. */
  var getPrototype$2 = overArg(Object.getPrototypeOf, Object);

  var _getPrototype = getPrototype$2;

  var arrayPush = _arrayPush,
      getPrototype$1 = _getPrototype,
      getSymbols = _getSymbols,
      stubArray = stubArray_1;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
    var result = [];
    while (object) {
      arrayPush(result, getSymbols(object));
      object = getPrototype$1(object);
    }
    return result;
  };

  var _getSymbolsIn = getSymbolsIn$2;

  var copyObject = _copyObject,
      getSymbolsIn$1 = _getSymbolsIn;

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn$1(source, object) {
    return copyObject(source, getSymbolsIn$1(source), object);
  }

  var _copySymbolsIn = copySymbolsIn$1;

  var baseGetAllKeys = _baseGetAllKeys,
      getSymbolsIn = _getSymbolsIn,
      keysIn$1 = keysIn_1;

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn$1(object) {
    return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
  }

  var _getAllKeysIn = getAllKeysIn$1;

  /** Used for built-in method references. */

  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray$1(array) {
    var length = array.length,
        result = new array.constructor(length);

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  var _initCloneArray = initCloneArray$1;

  var Uint8Array = _Uint8Array;

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer$3(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }

  var _cloneArrayBuffer = cloneArrayBuffer$3;

  var cloneArrayBuffer$2 = _cloneArrayBuffer;

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView$1(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  var _cloneDataView = cloneDataView$1;

  /** Used to match `RegExp` flags from their coerced string values. */

  var reFlags = /\w*$/;

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp$1(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  var _cloneRegExp = cloneRegExp$1;

  var Symbol$1 = _Symbol;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol$1(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }

  var _cloneSymbol = cloneSymbol$1;

  var cloneArrayBuffer$1 = _cloneArrayBuffer;

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray$1(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  var _cloneTypedArray = cloneTypedArray$1;

  var cloneArrayBuffer = _cloneArrayBuffer,
      cloneDataView = _cloneDataView,
      cloneRegExp = _cloneRegExp,
      cloneSymbol = _cloneSymbol,
      cloneTypedArray = _cloneTypedArray;

  /** `Object#toString` result references. */
  var boolTag$1 = '[object Boolean]',
      dateTag$1 = '[object Date]',
      mapTag$2 = '[object Map]',
      numberTag$1 = '[object Number]',
      regexpTag$1 = '[object RegExp]',
      setTag$2 = '[object Set]',
      stringTag$1 = '[object String]',
      symbolTag$1 = '[object Symbol]';

  var arrayBufferTag$1 = '[object ArrayBuffer]',
      dataViewTag$1 = '[object DataView]',
      float32Tag$1 = '[object Float32Array]',
      float64Tag$1 = '[object Float64Array]',
      int8Tag$1 = '[object Int8Array]',
      int16Tag$1 = '[object Int16Array]',
      int32Tag$1 = '[object Int32Array]',
      uint8Tag$1 = '[object Uint8Array]',
      uint8ClampedTag$1 = '[object Uint8ClampedArray]',
      uint16Tag$1 = '[object Uint16Array]',
      uint32Tag$1 = '[object Uint32Array]';

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag$1(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$1:
        return cloneArrayBuffer(object);

      case boolTag$1:
      case dateTag$1:
        return new Ctor(+object);

      case dataViewTag$1:
        return cloneDataView(object, isDeep);

      case float32Tag$1: case float64Tag$1:
      case int8Tag$1: case int16Tag$1: case int32Tag$1:
      case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
        return cloneTypedArray(object, isDeep);

      case mapTag$2:
        return new Ctor;

      case numberTag$1:
      case stringTag$1:
        return new Ctor(object);

      case regexpTag$1:
        return cloneRegExp(object);

      case setTag$2:
        return new Ctor;

      case symbolTag$1:
        return cloneSymbol(object);
    }
  }

  var _initCloneByTag = initCloneByTag$1;

  var isObject$1 = isObject_1;

  /** Built-in value references. */
  var objectCreate = Object.create;

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate$1 = (function() {
    function object() {}
    return function(proto) {
      if (!isObject$1(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object;
      object.prototype = undefined;
      return result;
    };
  }());

  var _baseCreate = baseCreate$1;

  var baseCreate = _baseCreate,
      getPrototype = _getPrototype,
      isPrototype = _isPrototype;

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject$1(object) {
    return (typeof object.constructor == 'function' && !isPrototype(object))
      ? baseCreate(getPrototype(object))
      : {};
  }

  var _initCloneObject = initCloneObject$1;

  var getTag$2 = _getTag,
      isObjectLike$1 = isObjectLike_1;

  /** `Object#toString` result references. */
  var mapTag$1 = '[object Map]';

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap$1(value) {
    return isObjectLike$1(value) && getTag$2(value) == mapTag$1;
  }

  var _baseIsMap = baseIsMap$1;

  var baseIsMap = _baseIsMap,
      baseUnary$1 = _baseUnary,
      nodeUtil$1 = _nodeUtil.exports;

  /* Node.js helper references. */
  var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;

  var isMap_1 = isMap$1;

  var getTag$1 = _getTag,
      isObjectLike = isObjectLike_1;

  /** `Object#toString` result references. */
  var setTag$1 = '[object Set]';

  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet$1(value) {
    return isObjectLike(value) && getTag$1(value) == setTag$1;
  }

  var _baseIsSet = baseIsSet$1;

  var baseIsSet = _baseIsSet,
      baseUnary = _baseUnary,
      nodeUtil = _nodeUtil.exports;

  /* Node.js helper references. */
  var nodeIsSet = nodeUtil && nodeUtil.isSet;

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

  var isSet_1 = isSet$1;

  var Stack = _Stack,
      arrayEach = _arrayEach,
      assignValue = _assignValue,
      baseAssign = _baseAssign,
      baseAssignIn = _baseAssignIn,
      cloneBuffer = _cloneBuffer.exports,
      copyArray = _copyArray,
      copySymbols = _copySymbols,
      copySymbolsIn = _copySymbolsIn,
      getAllKeys = _getAllKeys,
      getAllKeysIn = _getAllKeysIn,
      getTag = _getTag,
      initCloneArray = _initCloneArray,
      initCloneByTag = _initCloneByTag,
      initCloneObject = _initCloneObject,
      isArray = isArray_1,
      isBuffer = isBuffer$3.exports,
      isMap = isMap_1,
      isObject = isObject_1,
      isSet = isSet_1,
      keys = keys_1,
      keysIn = keysIn_1;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$1 = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG$1 = 4;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone$1(value, bitmask, customizer, key, object, stack) {
    var result,
        isDeep = bitmask & CLONE_DEEP_FLAG$1,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG$1;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value),
          isFunc = tag == funcTag || tag == genTag;

      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
        result = (isFlat || isFunc) ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat
            ? copySymbolsIn(value, baseAssignIn(result, value))
            : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack);
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);

    if (isSet(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function(subValue, key) {
        result.set(key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
      });
    }

    var keysFunc = isFull
      ? (isFlat ? getAllKeysIn : getAllKeys)
      : (isFlat ? keysIn : keys);

    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function(subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      // Recursively populate clone (susceptible to call stack limits).
      assignValue(result, key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  var _baseClone = baseClone$1;

  var baseClone = _baseClone;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_SYMBOLS_FLAG = 4;

  /**
   * This method is like `_.clone` except that it recursively clones `value`.
   *
   * @static
   * @memberOf _
   * @since 1.0.0
   * @category Lang
   * @param {*} value The value to recursively clone.
   * @returns {*} Returns the deep cloned value.
   * @see _.clone
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var deep = _.cloneDeep(objects);
   * console.log(deep[0] === objects[0]);
   * // => false
   */
  function cloneDeep(value) {
    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
  }

  var cloneDeep_1 = cloneDeep;

  var MaskHelperLayer = /*#__PURE__*/function () {
    // canvas大小
    // public canvas: HTMLCanvasElement
    // public canvasContext: CanvasRenderingContext2D
    // 当前maskLayer中所有的actions
    // 伪造map对象，给feature使用
    // function: constructor
    function MaskHelperLayer(bounds) {
      _classCallCheck(this, MaskHelperLayer);

      _defineProperty$1(this, "actions", []);

      _defineProperty$1(this, "map", {
        getScale: function getScale() {
          return 1;
        },
        transformGlobalToScreen: function transformGlobalToScreen(point) {
          var x = point.x,
              y = point.y;
          var _this$bounds = this.bounds,
              startX = _this$bounds.x,
              startY = _this$bounds.y;
          return {
            x: x - startX,
            y: startY - y
          };
        }
      });

      this.bounds = bounds;
      this.createRenderCanvas(); // 对象冒充运行环境

      this.map.getScale = this.map.getScale.bind(this);
      this.map.transformGlobalToScreen = this.map.transformGlobalToScreen.bind(this);
    } // override 创建offscreenCanvas层


    _createClass(MaskHelperLayer, [{
      key: "createRenderCanvas",
      value: function createRenderCanvas() {
        var _this$bounds2 = this.bounds,
            width = _this$bounds2.width,
            height = _this$bounds2.height;
        this.canvas = new OffscreenCanvas(width, height);
        this.canvas.width = width * CanvasLayer.dpr;
        this.canvas.height = height * CanvasLayer.dpr;
        this.canvasContext = this.canvas.getContext('2d'); // const {width, height} = this.bounds;
        // this.canvas = document.createElement('canvas');
        // this.canvas.width = width * CanvasLayer.dpr;
        // this.canvas.height = height * CanvasLayer.dpr;
        // this.canvas.style.width = width + 'px';
        // this.canvas.style.height = height + 'px';
        // this.canvas.style.border = '1px solid red';
        // this.canvasContext = this.canvas.getContext('2d');
        // document.body.appendChild(this.canvas);
      } // 添加action至当前ActionLayer中

    }, {
      key: "addAction",
      value: function addAction(action) {
        action.setStyle({
          strokeStyle: '#ff0000',
          fillStyle: '#ff0000'
        }, {
          refresh: false
        });
        action.onAdd(this);
        this.actions.push(action);
      } // 添加actions至当前ActionLayer中

    }, {
      key: "addActions",
      value: function addActions(actions) {
        var _this = this;

        forEach_1(actions, function (action) {
          return _this.addAction(action);
        });
      } // 获取当前层上的pixels

    }, {
      key: "getRle",
      value: function getRle() {
        var rlePixels = []; // rle数据，第一位是统计value=1的像素数

        var dpr = CanvasLayer.dpr;
        var _this$bounds3 = this.bounds,
            realWidth = _this$bounds3.width,
            realHeight = _this$bounds3.height;
        var _this$canvas = this.canvas,
            width = _this$canvas.width,
            height = _this$canvas.height;
        var pixels = this.canvasContext.getImageData(0, 0, width, height).data;
        var pixelCount = 0; // 统计数据

        var lastPixelValue = 1; // 上一次pixel-value值

        for (var i = 0; i < realHeight; i++) {
          for (var j = 0; j < realWidth; j++) {
            var rIndex = (i * dpr * realWidth + j) * 4 * dpr;
            var rValue = pixels[rIndex];
            var gValue = pixels[rIndex + 1];
            var bValue = pixels[rIndex + 2];
            var aValue = pixels[rIndex + 3];
            var currentPixelValue = +!!(rValue || gValue || bValue || aValue); // 如果当前pixelValue === lastPixelValue 上一次的pixel值

            if (currentPixelValue === lastPixelValue) {
              pixelCount++;
            } else {
              // 此时需要进行push数据
              rlePixels.push(pixelCount);
              pixelCount = 1; // 计数重置为1
            } // 然后判断是否达到最后一个像素点


            if (i + 1 === realHeight && j + 1 === realWidth) {
              rlePixels.push(pixelCount);
            }

            lastPixelValue = currentPixelValue;
          }
        }

        return rlePixels;
      } // @override

    }, {
      key: "refresh",
      value: function refresh() {
        // 绘制actions中所有action对象
        forEach_1(this.actions, function (action) {
          return action.refresh();
        });
      } // 清空canvas画布

    }, {
      key: "clear",
      value: function clear() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }]);

    return MaskHelperLayer;
  }();

  var MaskLayer = /*#__PURE__*/function (_CanvasLayer) {
    _inherits(MaskLayer, _CanvasLayer);

    var _super = _createSuper(MaskLayer);

    // function: constructor
    function MaskLayer(id) {
      var _this;

      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, MaskLayer);

      _this = _super.call(this, id, ELayerType.Mask, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "actions", []);

      return _this;
    } // 添加action至当前ActionLayer中


    _createClass(MaskLayer, [{
      key: "addAction",
      value: function addAction(action, option) {
        action.onAdd(this);
        this.actions.push(action);
      } // 删除action

    }, {
      key: "removeActionById",
      value: function removeActionById(targetActionId) {
        var newActions = filter_1(this.actions, function (action) {
          var actionId = action.id;

          if (actionId === targetActionId) {
            action.onRemove();
            return false;
          }

          return true;
        }); // 重新设置最新的actions


        this.actions = newActions; // 执行重绘刷新

        this.refresh();
      } // 删除所有actions

    }, {
      key: "removeAllActions",
      value: function removeAllActions() {
        var newActions = filter_1(this.actions, function (action) {
          action.onRemove();
          return false;
        }); // 重新设置最新的actions


        this.actions = newActions; // 执行重绘刷新

        this.refresh();
      } // 内部方法
      // 在橡皮擦擦除时添加临时clearAction
      // 此action并非实际真正action, 不会被记录到this.actions中

    }, {
      key: "setMovingClearAction",
      value: function setMovingClearAction(clearAction) {
        clearAction && clearAction.onAdd(this);
        this.movingClearAction = clearAction;
        this.refresh();
      } // 获取当前layer上所有category分类

    }, {
      key: "getActionCategories",
      value: function getActionCategories() {
        var actions = this.actions;

        var categories = map_1(actions, function (_ref) {
          var category = _ref.category;
          return category;
        }); // 去重之后，然后去除clearAction对应的category=undefined的情况


        return filter_1(uniq_1(categories), function (category) {
          return !!category;
        });
      } // 根action.category进行分组

    }, {
      key: "groupByCategory",
      value: function groupByCategory() {
        var actions = this.actions;
        var categories = this.getActionCategories();
        var groups = [];

        forEach_1(categories, function (cat) {
          var mappedActions = filter_1(actions, function (_ref2) {
            var type = _ref2.type,
                category = _ref2.category;
            return category === cat || type === EMaskActionType.Clear;
          });

          groups.push({
            category: cat,
            actions: mappedActions
          });
        });

        return groups;
      } // 获取指定group的rleData

    }, {
      key: "getGroupRleData",
      value: function getGroupRleData(group, bounds) {
        var category = group.category,
            _group$actions = group.actions,
            actions = _group$actions === void 0 ? [] : _group$actions;
        var maskLayerHelper = new MaskHelperLayer(bounds);

        var copyActions = cloneDeep_1(actions);

        maskLayerHelper.addActions(copyActions);
        var rle = maskLayerHelper.getRle();
        return {
          category: category,
          rle: rle
        };
      } // 根据分类获取分类分类rle数据, 截取某个范围的数据

    }, {
      key: "getRleData",
      value: function getRleData(bounds) {
        var _this2 = this;

        var groups = this.groupByCategory();
        var rles = []; // 所有category的rle数据集合

        forEach_1(groups, function (group) {
          var rle = _this2.getGroupRleData(group, bounds);

          rles.push(rle);
        });

        return rles;
      } // @override

    }, {
      key: "refresh",
      value: function refresh() {
        _get(_getPrototypeOf(MaskLayer.prototype), "refresh", this).call(this); // 绘制actions中所有action对象


        forEach_1(this.actions, function (action) {
          return action.refresh();
        }); // 判断是否存在movingClearAction，如果存在，也需要执行绘制


        this.movingClearAction && this.movingClearAction.refresh();
      }
    }]);

    return MaskLayer;
  }(CanvasLayer);

  var TextLayer = /*#__PURE__*/function (_CanvasLayer) {
    _inherits(TextLayer, _CanvasLayer);

    var _super = _createSuper(TextLayer);

    // 当前textLayer中所有的texts
    // function: constructor
    function TextLayer(id) {
      var _this;

      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, TextLayer);

      _this = _super.call(this, id, ELayerType.Text, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "texts", []);

      return _this;
    }

    _createClass(TextLayer, [{
      key: "addText",
      value: function addText(text, option) {
        var _ref = option || {},
            _ref$clear = _ref.clear,
            clear = _ref$clear === void 0 ? false : _ref$clear;

        clear && this.clear();
        text.onAdd(this);
        this.texts.push(text);
      } // 删除text

    }, {
      key: "removeTextById",
      value: function removeTextById(targetTextId) {
        var newTexts = filter_1(this.texts, function (text) {
          var textId = text.id;

          if (textId === targetTextId) {
            text.onRemove();
            return false;
          }

          return true;
        }); // 重新设置最新的texts


        this.texts = newTexts; // 执行重绘刷新

        this.refresh();
      } // 删除所有texts

    }, {
      key: "removeAllTexts",
      value: function removeAllTexts() {
        var newTexts = filter_1(this.texts, function (text) {
          text.onRemove();
          return false;
        }); // 重新设置最新的texts


        this.texts = newTexts; // 执行重绘刷新

        this.refresh();
      } // @override

    }, {
      key: "refresh",
      value: function refresh() {
        _get(_getPrototypeOf(TextLayer.prototype), "refresh", this).call(this);

        forEach_1(this.texts, function (text) {
          return text.refresh();
        });
      }
    }]);

    return TextLayer;
  }(CanvasLayer);

  var Layer = {
    Text: TextLayer,
    Mask: MaskLayer,
    Image: ImageLayer,
    Feature: FeatureLayer
  };

  var Feature = {
    Point: PointFeature,
    Circle: CircleFeature,
    Line: LineFeature,
    Polyline: PolylineFeature,
    Rect: RectFeature,
    Polygon: PolygonFeature
  };

  var ImageActionFeature = /*#__PURE__*/function (_Action) {
    _inherits(ImageActionFeature, _Action);

    var _super = _createSuper(ImageActionFeature);

    // 当前涂抹action分类

    /**
     * props: image可选初始化配置项
     * defaultImageInfo: 默认配置项
     * image: userImage merge defaultImageInfo
    */
    // 图片当前的位置
    // function: constructor
    function ImageActionFeature(id, category, image) {
      var _this;

      var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var style = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      _classCallCheck(this, ImageActionFeature);

      _this = _super.call(this, id, EMaskActionType.Image, props, style);

      _defineProperty$1(_assertThisInitialized(_this), "category", '');

      _this.imageInfo = assign_1({}, ImageActionFeature.defaultImageInfo, image);
      _this.position = _this.imageInfo.position;

      _this.updateImage();

      _this.category = category;
      return _this;
    } // 更新image对象


    _createClass(ImageActionFeature, [{
      key: "updateImage",
      value: function updateImage() {
        var _this2 = this;

        if (this.imageInfo.src) {
          this.image = new Image();
          this.image.src = this.imageInfo.src;

          this.image.onload = function () {
            return _this2.layer && _this2.refresh();
          };
        }
      } // 绘制image信息

    }, {
      key: "drawImage",
      value: function drawImage() {
        // 执行坐标转换
        var _this$layer$map$trans = this.layer.map.transformGlobalToScreen(this.position),
            screenX = _this$layer$map$trans.x,
            screenY = _this$layer$map$trans.y;

        var dpr = CanvasLayer.dpr;
        var scale = this.layer.map.getScale();
        var _this$imageInfo = this.imageInfo,
            width = _this$imageInfo.width,
            height = _this$imageInfo.height;
        var screenWidth = width * scale;
        var screenHeight = height * scale;
        Graphic.drawImage(this.layer.canvasContext, {
          image: this.image,
          x: screenX * dpr,
          y: screenY * dpr,
          width: screenWidth * dpr,
          height: screenHeight * dpr
        }, {});
      } // 执行绘制当前
      // @override

    }, {
      key: "refresh",
      value: function refresh() {
        _get(_getPrototypeOf(ImageActionFeature.prototype), "refresh", this).call(this);

        this.drawImage();
      }
    }]);

    return ImageActionFeature;
  }(Action);

  _defineProperty$1(ImageActionFeature, "defaultImageInfo", {
    src: '',
    width: 0,
    height: 0,
    position: {
      x: 0,
      y: 0
    } // 默认起始位置

  });

  var Mask = {
    Draw: DrawActionFeature,
    Clear: ClearActionFeature,
    Image: ImageActionFeature
  };

  var Control$1 = /*#__PURE__*/function () {
    // controlId
    // controlType
    // function: constructor
    function Control() {
      _classCallCheck(this, Control);
    } // function: trigger when control add to map


    _createClass(Control, [{
      key: "onAdd",
      value: function onAdd(map) {} // trigger when control remove from map
      // map exits first

    }, {
      key: "onRemove",
      value: function onRemove() {} // 刷新当前数据

    }, {
      key: "refresh",
      value: function refresh() {} // 打印测试输出

    }, {
      key: "printInfo",
      value: function printInfo() {}
    }]);

    return Control;
  }();

  var ScaleControl = /*#__PURE__*/function (_Control) {
    _inherits(ScaleControl, _Control);

    var _super = _createSuper(ScaleControl);

    // function: constructor
    function ScaleControl() {
      _classCallCheck(this, ScaleControl);

      return _super.call(this);
    } // 执行绘制当前
    // @override


    _createClass(ScaleControl, [{
      key: "refresh",
      value: function refresh() {}
    }]);

    return ScaleControl;
  }(Control$1);

  var Control = {
    Scale: ScaleControl
  };

  var EMarkerType; // marker事件监听

  (function (EMarkerType) {
    EMarkerType["Marker"] = "MARKER";
  })(EMarkerType || (EMarkerType = {}));

  var EMarkerEventType;

  (function (EMarkerEventType) {
    EMarkerEventType["Click"] = "click";
    EMarkerEventType["MouseDown"] = "mouseDown";
    EMarkerEventType["MouseUp"] = "mouseUp";
    EMarkerEventType["MouseOver"] = "mouseOver";
    EMarkerEventType["MouseOut"] = "mouseOut";
    EMarkerEventType["DragStart"] = "dragStart";
    EMarkerEventType["Dragging"] = "dragging";
    EMarkerEventType["DragEnd"] = "dragEnd";
    EMarkerEventType["RightClick"] = "rightClick";
  })(EMarkerEventType || (EMarkerEventType = {}));

  var Marker = /*#__PURE__*/function () {
    // markerId
    // markerType
    // props
    // marker注记icon
    // 是否拖拽中
    // 是否可拖拽【默认可拖拽】

    /**
     * props: text文本
     * defaultMarkerInfo: 默认文本配置项
     * style: userMarkerInfo merge defaultMarkerInfo
    */
    // function: constructor
    function Marker(id, marker) {
      var _this = this;

      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, Marker);

      _defineProperty$1(this, "dragging", false);

      _defineProperty$1(this, "draggingEnabled", false);

      _defineProperty$1(this, "events", {
        on: function on(eventType, callback) {
          _this.eventsObServer.on(eventType, callback);
        }
      });

      this.id = id;
      this.type = EMarkerType.Marker;
      this.props = props;
      this.markerInfo = assign_1({}, Marker.defaultMarkerInfo, marker);
      this.updateImage(); // 事件监听实例添加

      this.eventsObServer = new events.EventEmitter();
    } // function: trigger when marker add to markerLayer


    _createClass(Marker, [{
      key: "onAdd",
      value: function onAdd(layer) {
        this.layer = layer;
        this.refresh();
      } // trigger when marker remove from layer
      // layer exits first

    }, {
      key: "onRemove",
      value: function onRemove() {
        var imageElement = document.getElementById(this.id);
        imageElement && imageElement.remove();
      } // 开启鼠标按下拖拽

    }, {
      key: "enableDragging",
      value: function enableDragging() {
        this.draggingEnabled = true;
        this.dragging = false;
      }
    }, {
      key: "disableDragging",
      value: function disableDragging() {
        this.draggingEnabled = false;
        this.dragging = false;
      } // 更新image对象

    }, {
      key: "updateImage",
      value: function updateImage() {
        var _this2 = this;

        if (this.markerInfo.src) {
          this.image = new Image();
          this.image.id = this.id;
          this.image.style.position = 'absolute';
          this.image.style.cursor = 'pointer';
          this.image.style.userSelect = 'none';
          this.image.src = this.markerInfo.src;

          this.image.onload = function () {
            _this2.layer.dom.appendChild(_this2.image);

            _this2.attachEvents();
          };

          this.image.onerror = function () {
            console.error('marker‘s src onerror');
          };
        }
      } // 更新marker位置

    }, {
      key: "updatePosition",
      value: function updatePosition(position) {
        var markerInfo = this.markerInfo;
        this.markerInfo = _objectSpread2(_objectSpread2({}, markerInfo), {}, {
          position: position
        });
        this.refresh();
      } // 鼠标按下事件

    }, {
      key: "handleMouseDown",
      value: function handleMouseDown(e) {
        var _this3 = this;

        // 相关坐标值处理
        var screenX = e.screenX,
            screenY = e.screenY;
        this.startPageScreenPoint = {
          x: screenX,
          y: screenY
        }; // 重置

        this.toUpdatePosition = null; // 首先执行回调

        this.eventsObServer.emit(EMarkerEventType.MouseDown, this); // 然后判断是否允许dragging

        if (!this.draggingEnabled) {
          return;
        } // 执行dragging拖拽


        this.dragging = true;

        document.onmousemove = function (e) {
          return _this3.handleMarkerMove(e);
        };

        document.onmouseup = function (e) {
          return _this3.handleMarkerUp(e);
        }; // 执行onDragStart回调


        this.eventsObServer.emit(EMarkerEventType.DragStart, this);
      } // marker平移中

    }, {
      key: "handleMarkerMove",
      value: function handleMarkerMove(e) {
        var scale = this.layer.map.getScale();
        var screenX = e.screenX,
            screenY = e.screenY;
        var _this$startPageScreen = this.startPageScreenPoint,
            x = _this$startPageScreen.x,
            y = _this$startPageScreen.y;
        var screenDltX = screenX - x;
        var screenDltY = screenY - y;
        var globalDltX = screenDltX / scale;
        var globalDltY = screenDltY / scale;
        var position = this.markerInfo.position;
        this.toUpdatePosition = {
          x: position.x + globalDltX,
          y: position.y - globalDltY
        };
        this.refresh(this.toUpdatePosition); // 执行onDragging回调

        this.eventsObServer.emit(EMarkerEventType.Dragging, this, this.toUpdatePosition);
      } // marker平移结束

    }, {
      key: "handleMarkerUp",
      value: function handleMarkerUp(e) {
        this.dragging = false;
        document.onmousemove = null;
        document.onmouseup = null;

        if (this.toUpdatePosition) {
          // 首先复原marker，然后执行回调
          this.refresh(); // 执行更新回调

          this.eventsObServer.emit(EMarkerEventType.DragEnd, this, this.toUpdatePosition);
        }

        this.toUpdatePosition = null;
      } // 鼠标弹起事件

    }, {
      key: "handleMouseUp",
      value: function handleMouseUp(e) {
        this.eventsObServer.emit(EMarkerEventType.MouseUp, this);
      } // 鼠标滑过事件

    }, {
      key: "handleMouseOver",
      value: function handleMouseOver(e) {
        this.eventsObServer.emit(EMarkerEventType.MouseOver, this);
      } // 鼠标离开事件

    }, {
      key: "handleMouseOut",
      value: function handleMouseOut(e) {
        this.eventsObServer.emit(EMarkerEventType.MouseOut, this);
      }
    }, {
      key: "handleClick",
      value: function handleClick(e) {
        var buttonIndex = Util.EventUtil.getButtonIndex(e);

        if (buttonIndex === 2) {
          // 单击鼠标右键
          this.eventsObServer.emit(EMarkerEventType.RightClick, this);
        }

        this.eventsObServer.emit(EMarkerEventType.Click, this);
      } // marker添加事件绑定

    }, {
      key: "attachEvents",
      value: function attachEvents() {
        var _this4 = this;

        this.image.onmousedown = function (e) {
          return _this4.handleMouseDown(e);
        };

        this.image.onmouseup = function (e) {
          return _this4.handleMouseUp(e);
        };

        this.image.onmouseover = function (e) {
          return _this4.handleMouseOver(e);
        };

        this.image.onmouseout = function (e) {
          return _this4.handleMouseOut(e);
        };

        this.image.onclick = function (e) {
          return _this4.handleClick(e);
        };
      } // 刷新当前数据

    }, {
      key: "refresh",
      value: function refresh(customPosition) {
        var _this$markerInfo = this.markerInfo,
            markerPosition = _this$markerInfo.position,
            offset = _this$markerInfo.offset;
        var position = customPosition || markerPosition;

        var _this$layer$map$trans = this.layer.map.transformGlobalToScreen(position),
            screenX = _this$layer$map$trans.x,
            screenY = _this$layer$map$trans.y;

        var offsetX = offset.x,
            offsetY = offset.y;
        var left = screenX + offsetX;
        var top = screenY - offsetY;
        this.image.style.left = "".concat(left, "px");
        this.image.style.top = "".concat(top, "px");
      } // 用户事件添加

    }, {
      key: "printInfo",
      value: // 打印测试输出
      function printInfo() {}
    }]);

    return Marker;
  }();

  _defineProperty$1(Marker, "defaultMarkerInfo", {
    src: '',
    position: {
      x: 0,
      y: 0
    },
    // 文本位置
    offset: {
      x: 0,
      y: 0
    } // 文本偏移量

  });

  var AILabel = {
    Map: Map,
    Layer: Layer,
    Feature: Feature,
    Mask: Mask,
    Control: Control,
    Text: Text,
    Marker: Marker,
    Util: Util,
    version: '5.0.0'
  };

  return AILabel;

})));
