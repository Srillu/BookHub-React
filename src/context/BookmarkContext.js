import React from 'react'

const BookmarkContext = React.createContext({
  bookmarkList: [],
  addBookmarkItem: () => {},
  removeBookmarkItem: () => {},
})

export default BookmarkContext
