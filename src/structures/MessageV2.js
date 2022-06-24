"use strict";

/**
 * Message structure.
 */
class MessageV2 {
  /**
   * Constructs an instance of Message. For internal use only.
   * @param {Object} data
   * @param {Object} data.client
   * @param {number} data.timestamp
   * @param {string} data.sender
   * @param {(UserConversation|GroupConversation)} data.conversation
   * @param {Array<Object>} data.extras
   * @param {string} data.message
   * @hideconstructor
   */
  constructor(data = {}) {
    this._client = data.client;
    this._timestamp = data.timestamp;
    this._sender = data.sender
    this._extras = data.extras || [];
    this._conversation = data.conversation;
    this._message = data.message || "";
  }

  /**
   * The Client that this instance belongs to.
   * @type {Client}
   * @readonly
   */
  get client() {
    return this._client;
  }

  /**
   * The timestamp of the message, in milliseconds since the Unix epoch.
   * @type {number}
   * @readonly
   */
  get timestamp() {
    return this._timestamp;
  }

  /**
   * The author of the message.
   * An object with only the `id` property.
   * @type {Object}
   * @readonly
   */
  get sender() {
    return this._sender;
  }

  /**
   * The conversation that the message was sent in. Can be a UserConversation or GroupConversation.
   * @type {(UserConversation|GroupConversation)}
   * @readonly
   */
  get conversation() {
    return this._conversation;
  }

  /**
   * The extras that were sent with the message.
   * @type {Array<object>}
   * @readonly
   */
  get extras() {
    return this._extras;
  }

  /**
   * The text content of the message.
   * @type {string}
   * @readonly
   */
  get message() {
    return this._message;
  }
}

module.exports = MessageV2;
