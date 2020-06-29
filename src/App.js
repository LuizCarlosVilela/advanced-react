import React, { Components } from 'react';

import Twitter from './components/Twitter';

class App extends Components() {

  state = {
    actived: true
  }
  onRemove = () => {
    this.setState({
      actived: false
    })
  }
  
  render() {

    const posts = {
      title: "hehe",
      description: "ksksk"
    }

    return (
      <div>
        <button onClick={this.onRemove}>Remover</button>
        {this.state.actived && (
          <Twitter posts={posts}/>
        )}
      </div>
    )
  }
}

export default App;
