import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'bulma';
import './index.scss'

const Index = ({ children }) => (
  <div>
    <Helmet
      title="Google Developer Group Divinópolis"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}>
      <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js" />
    </Helmet>
    {children()}
  </div>
)

export default Index
