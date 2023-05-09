import {BsFillStarFill} from 'react-icons/bs'

import {RiDeleteBin2Line} from 'react-icons/ri'

import BookmarkContext from '../../context/BookmarkContext'

import './index.css'

const BookmarkItem = props => (
  <BookmarkContext.Consumer>
    {value => {
      const {removeBookmarkItem} = value
      const {bookmarkItemDetails} = props
      const {
        authorName,
        coverPic,
        rating,
        readStatus,
        title,
      } = bookmarkItemDetails

      const onClickRemoveBookMark = () => {
        removeBookmarkItem(bookmarkItemDetails)
      }

      return (
        <li className="book-mark-item-container">
          <div className="book-mark-image-container">
            <img alt={title} src={coverPic} className="all-books-image" />
            <div>
              <h1 className="all-books-item-heading">{title}</h1>
              <p className="all-books-item-author">{authorName}</p>
              <div className="star-icon-container">
                <p className="all-books-item-rating">Avg Rating </p>
                <BsFillStarFill className="star-icon" />
                <p>{rating}</p>
              </div>
              <p className="all-books-item-rating">
                Status:
                <span className="all-books-item-span all-books-item-rating">
                  {readStatus}
                </span>
              </p>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={onClickRemoveBookMark}
              className="bookmark-btn"
            >
              <RiDeleteBin2Line className="bookmark" />
            </button>
          </div>
        </li>
      )
    }}
  </BookmarkContext.Consumer>
)

export default BookmarkItem
