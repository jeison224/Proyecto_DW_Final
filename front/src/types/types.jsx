import React from "react";
import PropTypes from "prop-types";

const userPropTypes = PropTypes.shape({
  _id: PropTypes.string,
  nombre: PropTypes.string,
  usuario: PropTypes.string,
});

const authResponsePropTypes = PropTypes.shape({
  body: PropTypes.shape({
    user: userPropTypes,
    accessToken: PropTypes.string,
    refreshToken: PropTypes.string,
  }),
});

const errorResponsePropTypes = PropTypes.shape({
  body: PropTypes.shape({
    error: PropTypes.string,
  }),
});

const AccessTokenResponseProptypes = PropTypes.shape({
  statusCode: PropTypes.number,
  body: PropTypes.shape({
    accessToken: PropTypes.string,
  }),
  error: PropTypes.string,
});

function MyComponent(props) {
  return (
    <div>
      <h1>My Component</h1>
      {props.response.body.user ? (
        <div>
          <p>User ID: {props.response.body.user._id}</p>
          <p>Nombre: {props.response.body.user.nombre}</p>
          <p>Usuario: {props.response.body.user.usuario}</p>
        </div>
      ) : (
        <div>
          <p>Error: {props.response.body.error}</p>
        </div>
      )}
    </div>
  );
}

MyComponent.propTypes = {
  response: PropTypes.oneOfType([authResponsePropTypes, errorResponsePropTypes,AccessTokenResponseProptypes]),
};

export default MyComponent;