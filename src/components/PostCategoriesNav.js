import React from 'react'
import { Link } from 'gatsby'
import './PostCategoriesNav.css'
import Logo from './Logo'
import Logo2 from './Logo2'


const PostCategoriesNav = ({ categories }) => <div className="PostCategoriesNav">
  <Logo/>
  <Link
    className="NavLink"
    to='post-categories/news'>News
  </Link>
  <Link className="NavLink">
    <a href='https://merchpage.netlify.com'>Merch</a>
  </Link>
  <Link className="NavLink">
  <a href="https://sektapage.netlify.com">Sekta</a>
  </Link>
  <Logo2/>
</div>

export default PostCategoriesNav
