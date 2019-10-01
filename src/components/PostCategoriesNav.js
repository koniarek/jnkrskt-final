import React from 'react'
import { Link } from 'gatsby'
import './PostCategoriesNav.css'
import Logo from './Logo'
import Logo2 from './Logo2'

const PostCategoriesNav = ({ categories }) => (
  <div className="PostCategoriesNav">
    <Logo/>
    {categories.map((category, index) => (
      <Link
        exact="true"
        className="NavLink"
        key={category.title + index}
        to={category.slug}
      >
        {category.title}
      </Link>
    ))}
    <NavLink to="https://merchpage.netlify.com/">Merch</NavLink>
    <NavLink to="https://sektapage.netlify.com">Sekta</NavLink>

    <Logo2/>
  </div>
)

export default PostCategoriesNav
