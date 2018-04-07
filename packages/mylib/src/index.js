import React from 'react';
import 'react-vis/dist/style.css';
import { FlexibleXYPlot, HorizontalBarSeries } from 'react-vis';

export function ProgressBar() {
    const panelStyle = {
        height: 30,
        padding: 8
    };
    const series1 = [{ y: 1, x: 20 }];
    const series2 = [{ y: 1, x: 10 }];
    const series3 = [{ y: 1, x: 70 }];
    const margin = { top: 0, bottom: 0, left: 0, right: 0 };

    return (
        <div style={panelStyle}>
            <FlexibleXYPlot stackBy="x" margin={margin}>
                <HorizontalBarSeries data={series1} color="#f2d200" />
                <HorizontalBarSeries data={series2} color="#404040" />
                <HorizontalBarSeries data={series3} color="#000000" />
            </FlexibleXYPlot>
        </div>
    );
}
