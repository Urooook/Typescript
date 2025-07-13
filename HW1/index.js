/**
 * @typedef {(Object.<string,JSONlike>|JSONlike[]|string|number|boolean|null)} JSONlike
 */

/**
 * @typedef {Object} Config1
 * @property {Object.<string, string>=} [headers]
 * @property {(JSONlike|ArrayBuffer)=} [body]
 * @property {('json'|'text'|'document'|'buffer')=} [contentType]
 */

/**
 * @typedef {{
 *   headers?: {[key: string]: string},
 *   body?: (JSONlike|ArrayBuffer),
 *   contentType?: ('json'|'text'|'document'|'buffer')
 * }} Config2
 *
 */

/**
 * @typedef {{
 *   json: () => Promise<Object>,
 *   text: function(): Promise<string>,
 *   document: function(): Promise<Document>,
 *   buffer: function(): Promise<ArrayBuffer>
 * }} ReturnType
 *
 */

/**
 * @type {Config1}
 */
const defaultConfig = {
    headers: {Authorization: '123'}
};

/**
 *
 * @param {string} url Отправляет POST-запрос
 * @param {Config1=} params
 * @returns {ReturnType}
 */
function post(url, params) {}

/**
 *
 * @param {string} url Отправляет PUT-запрос
 * @param {Config1=} params
 * @returns {ReturnType}
 */
function put(url, params) {}