import {BsFillStarFill} from 'react-icons/bs'

import BookmarkItem from '../BookmarkItem'
import BookmarkContext from '../../context/BookmarkContext'

const BookmarkRoute = () => (
  <BookmarkContext.Consumer>
    {value => {
      const {bookmarkList} = value

      console.log(bookmarkList)

      return (
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
