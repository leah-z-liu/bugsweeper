import React, { Component } from React;
import Cell from './Cell';

import {generateMap, placeBugs, populateMap} from '../helpers';

export default class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mapSize: 10,
            bugCount: 10,
            theMap: populateMap(placeBugs(generateMap(10, 10), 10), 10),
            cellsClicked: 0
        }
    }

    handleClicks = () => {
        let (mapSize, bugCount, cellsClicked) = this.state;
        let safeCells = mapSize * mapSize - bugCount;
        this.setState({
            cellsClicked: cellsClicked++
        });
        if (cellsClicked === safeCells) {
            alert("You won!!");
        }
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.theMap.map((item, row) => {
                            return (<tr key={row} className="mapRow">
                                {item.map((subItem, col) => {
                                    return (
                                        <Cell key={col} row={row} column={col} value={subItem} cellsClicked={this.handleClicks} />
                                    );
                                })}
                        </tr>)
                        })};
                    </tbody>
                </table>
            </div>
        );
    }
}

