import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

    state = {
        cars: [
            {
                name: 'Ford',
                year: '2018'
            },
            {
                name: 'Audi',
                year: '2016'
            },
            {
                name: 'ВАЗ',
                year: '2019'
            }
        ],
        pageTitle: 'React components',
        showCars: false
    };

    onChangeName = (name, index) => {
       console.log(name, index);
       const car = this.state.cars[index];
       car.name = name;
        const cars = [...this.state.cars];
        cars[index] = car;
        this.setState ({
            cars
        })



    };
    onToggleCars = () => {
        this.setState({
            showCars: !this.state.showCars

        });
    };

    onInput = (event) => {
        this.setState({
            pageTitle: event.target.value
        })
    };

    deleteHandler(index) {
        const cars = this.state.cars.concat();
        cars.splice(index, 1);
        this.setState({
            cars
        })

    }

    render() {

        return (
            <div  style={{
                width: 400,
                margin: 'auto',
                paddingTop: 20
            }}>
                {/*<h1>{this.state.pageTitle}</h1>*/}
                <h1>{this.props.title}</h1>
                <button onClick={this.onToggleCars.bind(this, 'Changed')}>Toggle Cars</button>

                {this.state.showCars ?

                    this.state.cars.map((car, index) => {
                        return (
                            <Car
                                key={index}
                                name={car.name}
                                year={car.year}
                                onDelete={this.deleteHandler.bind(this, index)}
                                onChangeName={(event) => this.onChangeName(event.target.value, index)}
                            />
                        )
                    })
                    : null
                }
            </div>
        );
    }
}

export default App;
