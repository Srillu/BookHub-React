import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import HomeRoute from './components/HomeRoute'
import LoginRoute from './components/LoginRoute'
import BookShelvesRoute from './components/BookShelvesRoute'
import BookDetailsRoute from './components/BookDetailsRoute'

import BookmarkContext from './context/BookmarkContext'

import BookmarkRoute from './components/BookmarkRoute'

import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

// use the below bookshelvesList for rendering read status of book items in Bookshelves Route

// const bookshelvesList = [
//   {
//     id: '22526c8e-680e-4419-a041-b05cc239ece4',
//     value: 'ALL',
//     label: 'All',
//   },
//   {
//     id: '37e09397-fab2-46f4-9b9a-66b2324b2e22',
//     value: 'READ',
//     label: 'Read',
//   },
//   {
//     id: '2ab42512-3d05-4fba-8191-5122175b154e',
//     value: 'CURRENTLY_READING',
//     label: 'Currently Reading',
//   },
//   {
//     id: '361d5fd4-9ea1-4e0c-bd47-da2682a5b7c8',
//     value: 'WANT_TO_READ',
//     label: 'Want to Read',
//   },
// ]

class App extends Component {
  state = {bookmarkList: []}

  addBookmarkItem = bookmarkItem => {
    const {bookmarkList} = this.state
    const bookMark = bookmarkList.some(
      eachBookmarkItem => eachBookmarkItem.id === bookmarkItem.id,
    )

    console.log(bookMark)
    if (bookMark) {
      this.setState(prevState => ({
        bookmarkList: prevState.bookmarkList.filter(
          eachItem => eachItem.id !== bookmarkItem.id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        bookmarkList: [...prevState.bookmarkList, bookmarkItem],
      }))
    }
  }

  removeBookmarkItem = bookDetails => {
    const {bookmarkList} = this.state

    const isRemove = bookmarkList.some(
      eachBookmarkItem => eachBookmarkItem.id === bookDetails.id,
    )

    if (isRemove) {
      this.setState(prevState => ({
        bookmarkList: prevState.bookmarkList.filter(
          eachItem => eachItem.id !== bookDetails.id,
        ),
      }))
    }
  }

  render() {
    const {bookmarkList} = this.state
    return (
      <BookmarkContext.Provider
        value={{
          bookmarkList,
          addBookmarkItem: this.addBookmarkItem,
          removeBookmarkItem: this.removeBookmarkItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/shelf" component={BookShelvesRoute} />
          <ProtectedRoute
            exact
            path="/books/:id"
            component={BookDetailsRoute}
          />
          <ProtectedRoute exact path="/bookmark" component={BookmarkRoute} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </BookmarkContext.Provider>
    )
  }
}

export default App
