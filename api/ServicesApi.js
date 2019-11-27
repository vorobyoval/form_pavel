/*
 * Demografic mark tool
 * Demografic mark tool API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Label', 'model/Source'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Label'), require('../model/Source'));
  } else {
    // Browser globals (root is window)
    if (!root.DemograficMarkTool) {
      root.DemograficMarkTool = {};
    }
    root.DemograficMarkTool.ServicesApi = factory(root.DemograficMarkTool.ApiClient, root.DemograficMarkTool.Label, root.DemograficMarkTool.Source);
  }
}(this, function(ApiClient, Label, Source) {
  'use strict';

  /**
   * Services service.
   * @module api/ServicesApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ServicesApi. 
   * @alias module:api/ServicesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getLabels operation.
     * @callback module:api/ServicesApi~getLabelsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Label>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of available labels
     * 
     * @param {module:api/ServicesApi~getLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Label>}
     */
    this.getLabels = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Label];

      return this.apiClient.callApi(
        '/labels', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSources operation.
     * @callback module:api/ServicesApi~getSourcesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Source>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of available sources
     * 
     * @param {module:api/ServicesApi~getSourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Source>}
     */
    this.getSources = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Source];

      return this.apiClient.callApi(
        '/sources', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
