import React from 'react'
import Header from './features/header/Header'
import Edit from './features/Edit'
import TodoList from './features/todos/TodoList'
import Footer from './features/footer/Footer'

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Todos</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <div className="todoapp">
            <Header />
            <Edit />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
