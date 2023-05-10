import BookmarkItem from '../BookmarkItem'
import BookmarkContext from '../../context/BookmarkContext'

import './index.css'

const BookmarkRoute = () => (
  <BookmarkContext.Consumer>
    {value => {
      const {bookmarkList} = value

      console.log(bookmarkList.length)

      const noBookItems = bookmarkList.length === 0

      return noBookItems ? (
        <div className="no-bookmarks">
          <h1>No BookMarks To Show </h1>
        </div>
      ) : (
        <ul>
          <h1>My Bookmarks</h1>
          {bookmarkList.map(eachItem => (
            <BookmarkItem key={eachItem.id} bookmarkItemDetails={eachItem} />
          ))}
        </ul>
      )
    }}
  </BookmarkContext.Consumer>
)

export default BookmarkRoute
