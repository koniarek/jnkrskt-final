import React from 'react'
import { Link } from 'gatsby'
import './PostCategoriesNav.css'
import Logo from './Logo'
import Logo2 from './Logo2'

/* eslint-disable */
const PostCategoriesNav = ({}) => <div className="PostCategoriesNav">
  <Logo/>
  <Link
    className="NavLink"
    to='post-categories/news'>Co Tam?
  </Link>
  <Logo2/>
</div>

export default PostCategoriesNav
