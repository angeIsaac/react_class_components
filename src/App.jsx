import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Définir l'état initial
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Développeur Full Stack passionné par les nouvelles technologies.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Développeur Full Stack',
      },
      show: false,
      mountedTime: 0,
    };
  }

  componentDidMount() {
    // Démarrer un intervalle pour mettre à jour le temps écoulé
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Nettoyer l'intervalle lorsque le composant est démonté
    clearInterval(this.interval);
  }

  // Méthode pour basculer l'affichage du profil
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, mountedTime } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bienvenue sur mon site de portfolio</h1>
          <button onClick={this.toggleShow}>
            {show ? 'Cacher le profil' : 'Afficher le profil'}
          </button>
          {show && (
            <div>
              <h2>{person.fullName}</h2>
              <img src={person.imgSrc} alt={person.fullName} />
              <p>{person.bio}</p>
              <h3>{person.profession}</h3>
            </div>
          )}
          <p>Temps écoulé depuis le montage : {mountedTime} secondes</p>
        </header>
      </div>
    );
  }
}

export default App;
