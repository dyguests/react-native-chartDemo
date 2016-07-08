/**
 * Created by fanhl on 16/7/8.
 */
'use strict';//使用严格模式
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-native';
import Chart from 'react-native-chart';

const data = [
    ['你好', 1],
    [1, 3],
    [3, 7],
    [4, 9],
];

export default class ChartPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Chart
                    style={styles.chart}
                    data={data}
                    verticalGridStep={5}
                    type="bar"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    chart: {
        width: 200,
        height: 200,
    },
});