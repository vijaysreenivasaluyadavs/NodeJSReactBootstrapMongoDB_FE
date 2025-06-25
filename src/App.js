    // my-app-client/src/App.js
    import React, { useEffect, useState } from 'react';
    import './App.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { Container, Card, CardGroup, Image } from 'react-bootstrap';
    import { useForm } from 'react-hook-form';

    //https://getbootstrap.com/docs/5.3/getting-started/introduction/

    import VijayImage from './images/Vayuputra.jpg';
    import Cow_Curd_Img from './images/Cow_Curd.jpg';
    import Misthi_Dohi_Img from './images/Misthi Dohi.jpg';
    import Paneer_Img from './images/Paneer.jpg';


    function App() {

        //useState returns 2 values of an array; 1st is the current state; 2nd is the function to change the current state
        const [items, setItems] = useState([]); 
        const [imageURL, setImageURL] = useState([]);
        const [count, setCount] = useState(0);
        const [name, setName] = useState("Vijay");
        const [email, setEmail] = useState("xxx@gmail.com");

        //https://www.youtube.com/watch?v=O6P86uwfdR0
        function incrementCount () {
            setCount (previousCount => (previousCount+1))  //Refer to the below function as well, which is the same; THis setCount with PreviousCount is slightly different as explained in the video (7:00)
        }

        /* This function is same as above function; But with a difference, the difference is explained in the video https://www.youtube.com/watch?v=O6P86uwfdR0 how we can change the count state
        function incrementCount () {
            setCount (count +1)
        }
        */

        /* Note: useState will work differently with objects passed to useState */

        function decrementCount () {
            setCount (count-1)
        }


        const handleSubmit = (event) => {
          event.preventDefault(); // prevent page reload
            alert(`Submitted:\nName: ${name}\nEmail: ${email}`);
        };

        useEffect(() => {
            fetch('http://localhost:5000/api/items') // Fetch from Node.js server
                .then((response) => response.json())
                .then((vijaydata) => setItems(vijaydata))
                .catch((error) => console.error('Error fetching data:', error));
        }, []);

        return (

            <div className="App">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the first item’s accordion body, which contains Items from Node.js Backend:</strong>
                              <h1>Items from Node.js Backend:</h1>
                              <ul>
                                  {items.map((item) => (
                                      <li key={item.id}>{item.name}</li>
                                  ))}
                              </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <div class="alert alert-danger" role="alert">
                              A simple primary alert—check it out!
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                            <Container className="mt-5">
                              <Card className="p-3 shadow-sm">
                              <h3>Render Image from Backend</h3>
                              <Image src={VijayImage} alt="Vijay Some texts" fluid rounded />
                              </Card>
                            </Container>

                            <div className="p-3">
                              <h3>Image from URL</h3>
                              <Image src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTa0j1dfWm4akCMyzzUlLPgRBI-OQ-aETZAWIb7WSuDVgygdd30NwGbPwsD8D3hkuedB62HuhjqLy9wc_PblcXI3P9FC-HIfSy0tMC5Z8xJjA" roundedCircle fluid alt="Image from External URL" />
                            </div>

                      <div className='container'>
                        <div className='row'>
                          <div className='col-3' style={{ margin: '2px' }}>
                            <div class="card">
                              <Image src={VijayImage} alt="Vijay Some texts" fluid rounded />
                              <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                              </div>
                            </div>
                          </div>
                          
                          <div className='col-3'>
                            <div class="card">
                              <Image src={VijayImage} alt="Vijay Some texts" fluid rounded />
                              <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                              </div>
                            </div>
                          </div>
                          <div className='col-3'>
                            <div class="card">
                              <Image src={VijayImage} alt="Vijay Some texts" fluid rounded />
                              <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                            
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Accordion Item #4
                      </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                            <>
                            <button onClick={decrementCount}> - </button>
                            <span>{count}</span>
                            <button onClick={incrementCount}> + </button>
                            </>
                      </div>
                    </div>
                  </div>



                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Accordion Item #5
                      </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                            <div style={{ padding: '20px' }}>
                              <h2>Submit Form Example</h2>
                              <form onSubmit={handleSubmit}>
                                <div>
                                  <label>Name: </label>
                                  <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                  />
                                </div>

                                <div style={{ marginTop: '10px' }}>
                                  <label>Email: </label>
                                  <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                  />
                                </div>

                                <button type="submit" style={{ marginTop: '20px' }}>
                                  Submit
                                </button>
                              </form>
                            </div>
                      </div>
                    </div>
                  </div>

                </div>
            </div>
        );
    }

    export default App;