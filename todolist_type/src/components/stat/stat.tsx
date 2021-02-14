import React, { FunctionComponent } from 'react'; 
import { useTodolist } from "../../providers/todoProvider"
import { XYPlot, VerticalBarSeries, XAxis, YAxis, LabelSeries } from 'react-vis';

import "./stat.css";

const Stat:FunctionComponent = () => {
    const {state} = useTodolist();
    const data = [{'x': 'completed', 'y': 0},{'x': 'incompleted', 'y': 0}]

    for(const todo of state.todolist){
        if(todo.completed){
            data[0].y+=1
        }else{
            data[1].y+=1
        }
    }

    return (
        <XYPlot height={500} width= {500} xType="ordinal" yDomain={[0,150]}> 
            <XAxis />
            <YAxis />
            <VerticalBarSeries data={data} barWidth={0.5}/>
            <LabelSeries
                data={data.map((obj) => {
                    return { ...obj, label: obj.y.toString() };
                }) as any}
                labelAnchorX="middle"
                labelAnchorY="text-after-edge"
            />
        </XYPlot>
    );
}

export default Stat;