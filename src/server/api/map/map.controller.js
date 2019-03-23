"use strict";
import Map from "./map.model";

export const getMarkers = (req, res) => {
  return Map.find()
    .exec()
    .then(_respondWithResult(res))
    .catch(_handleError(res));
};

export const saveMarker = (req, res) => {
  return Map.create(req.body)
    .then(_respondWithResult(res))
    .catch(_handleError(res));
};

export const removeMarker = (req, res) => {
  return Map.remove({ _id: req.params.id })
    .then(_respondWithResult(res))
    .catch(_handleError(res));
};

const _respondWithResult = (res, statusCode) => {
  statusCode = statusCode || 200;
  return entity => {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
};

const _handleError = (res, statusCode) => {
  statusCode = statusCode || 500;
  return err => {
    res.status(statusCode).send(err);
  };
};
