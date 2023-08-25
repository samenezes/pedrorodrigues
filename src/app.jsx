import './app.css'

function App() {

  window.addEventListener('load',function(){


    const valores=fetch('https://opentdb.com/api?amount=30&category=15').then(res=>{
    
    res.json().then(dados=>{
    
        mostraDados(dados);
    });
    }).catch(erro=>{
    
        console.log(erro+" erro na requisição")
    
    });
    
    });
    function legenda(){
        fetch('https://opentdb.com/api?amount=30&category=15').then(legenda => legenda.json()
        .then(dados=>{
                var legenda = document.querySelector('#legenda')
                legenda.innerHTML = `${dados.content}`
        }))
      }

    return (
        <>
         <div className="container">
              <section>
              <h1>Pedro Henrique Rodrigues!</h1>
              <div> 
                <div id="legenda">Prova de Framework</div>                   
              </div>
           </section>
    
           </div>
        </>
      )
    
    }
    export default App