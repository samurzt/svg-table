import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import classNames from 'classnames';


const tableData = {
  id: 't1',
  confidenceScore: 50,
  tag: 'Bank details',
  coordinates: { x: 0, y: 0, width: 380, height: 190 },
  styles: { stroke: 'red', fill: 'transparent' },
  type: 'table',
  tableCols: [
    {
      id: 'col1',
      coordinates: { x: 5, y: 5, width: 90, height: 90 },
      styles: { stroke: 'blue', fill: 'transparent' },
      type: 'col',
    },
    {
      id: 'col2',
      coordinates: { x: 105, y: 5, width: 90, height: 90 },
      styles: { stroke: 'blue', fill: 'transparent' },
      type: 'col',
    },
    {
      id: 'col3',
      coordinates: { x: 205, y: 5, width: 90, height: 90 },
      styles: { stroke: 'blue', fill: 'transparent' },
      type: 'col',
    },
    {
      id: 'col4',
      coordinates: { x: 305, y: 5, width: 90, height: 90 },
      styles: { stroke: 'blue', fill: 'transparent' },
      type: 'col',
    },
  ],
  tableRows: [
    {
      id: 'row1',
      isHeader: true,
      coordinates: { x: 5, y: 5, width: 180, height: 45 },
      styles: { stroke: 'green', fill: 'transparent' },
      type: 'row',
      cells: [
        {
          id: 'cell11',
          isNull: false,
          colSpan: 1,
          rowSpan: 1,
          value: 'c-11',
          coordinates: { x: 10, y: 10, width: 85, height: 35 },
          styles: { stroke: 'yellow', fill: '#ccc' },
          type: 'cell',
        },
        {
          id: 'cell12',
          isNull: false,
          colSpan: 1,
          rowSpan: 1,
          value: 'c-12',
          coordinates: { x: 100, y: 10, width: 85, height: 35 },
          styles: { stroke: 'yellow', fill: '#ccc' },
          type: 'cell',
        }, {
          id: 'cell13',
          isNull: false,
          colSpan: 1,
          rowSpan: 1,
          value: 'c-11',
          coordinates: { x: 190, y: 10, width: 85, height: 35 },
          styles: { stroke: 'yellow', fill: '#ccc' },
          type: 'cell',
        }, {
          id: 'cell14',
          isNull: false,
          colSpan: 1,
          rowSpan: 1,
          value: 'c-12',
          coordinates: { x: 280, y: 10, width: 85, height: 35 },
          styles: { stroke: 'yellow', fill: '#ccc' },
          type: 'cell',
        },
      ]
    },
    {
      id: 'row2',
      isHeader: true,
      coordinates: { x: 5, y: 55, width: 180, height: 45 },
      styles: { stroke: 'green', fill: 'transparent' },
      type: 'row',
      cells: [
        {
          id: 'cell21',
          isNull: false,
          colSpan: 1,
          rowSpan: 1,
          value: 'c-21',
          coordinates: { x: 10, y: 55, width: 85, height: 35 },
          styles: { stroke: 'yellow', fill: '#ccc' },
          type: 'cell',
        },
        {
          id: 'cell22',
          isNull: false,
          colSpan: 2,
          rowSpan: 2,
          value: 'c-22',
          coordinates: { x: 100, y: 55, width: 85, height: 35 },
          styles: { stroke: 'yellow', fill: '#ccc' },
          type: 'cell',
          merged: true
        }, {
          id: 'cell23',
          isNull: false,
          colSpan: 1,
          rowSpan: 1,
          value: 'c-21',
          coordinates: { x: 190, y: 55, width: 85, height: 35 },
          styles: { stroke: 'yellow', fill: '#ccc' },
          type: 'cell',
          merged: true,
        },
        {
          id: 'cell24',
          isNull: false,
          colSpan: 1,
          rowSpan: 1,
          value: 'c-22',
          coordinates: { x: 280, y: 55, width: 85, height: 35 },
          styles: { stroke: 'yellow', fill: '#ccc' },
          type: 'cell',
        },
      ]
    },
    {
      id: 'row3',
      isHeader: true,
      coordinates: { x: 5, y: 105, width: 180, height: 45 },
      styles: { stroke: 'green', fill: 'transparent' },
      type: 'row',
      cells: [
        {
          id: 'cell31',
          isNull: false,
          colSpan: 1,
          rowSpan: 1,
          value: 'c-21',
          coordinates: { x: 10, y: 100, width: 85, height: 35 },
          styles: { stroke: 'yellow', fill: '#ccc' },
          type: 'cell',
        },
        {
          id: 'cell32',
          isNull: false,
          colSpan: 1,
          rowSpan: 1,
          value: 'c-22',
          coordinates: { x: 100, y: 100, width: 85, height: 35 },
          styles: { stroke: 'yellow', fill: '#ccc' },
          type: 'cell',
          merged: true,
        }, {
          id: 'cell33',
          isNull: false,
          colSpan: 1,
          rowSpan: 1,
          value: 'c-21',
          coordinates: { x: 190, y: 100, width: 85, height: 35 },
          styles: { stroke: 'yellow', fill: '#ccc' },
          type: 'cell',
          merged: true,
      },
        {
          id: 'cell34',
          isNull: false,
          colSpan: 1,
          rowSpan: 1,
          value: 'c-22',
          coordinates: { x: 280, y: 100, width: 85, height: 35 },
          styles: { stroke: 'yellow', fill: '#ccc' },
          type: 'cell',
        },
      ]
    },
    {
      id: 'row4',
      isHeader: true,
      coordinates: { x: 5, y: 155, width: 180, height: 45 },
      styles: { stroke: 'green', fill: 'transparent' },
      type: 'row',
      cells: [
        {
          id: 'cell41',
          isNull: false,
          colSpan: 1,
          rowSpan: 1,
          value: 'c-21',
          coordinates: { x: 10, y: 145, width: 85, height: 35 },
          styles: { stroke: 'yellow', fill: '#ccc' },
          type: 'cell',
        },
        {
          id: 'cell42',
          isNull: false,
          colSpan: 1,
          rowSpan: 1,
          value: 'c-22',
          coordinates: { x: 100, y: 145, width: 85, height: 35 },
          styles: { stroke: 'yellow', fill: '#ccc' },
          type: 'cell',
        }, {
          id: 'cell43',
          isNull: false,
          colSpan: 1,
          rowSpan: 1,
          value: 'c-21',
          coordinates: { x: 190, y: 145, width: 85, height: 35 },
          styles: { stroke: 'yellow', fill: '#ccc' },
          type: 'cell',
        },
        {
          id: 'cell44',
          isNull: false,
          colSpan: 1,
          rowSpan: 1,
          value: 'c-22',
          coordinates: { x: 280, y: 145, width: 85, height: 35 },
          styles: { stroke: 'yellow', fill: '#ccc' },
          type: 'cell',
        },
      ]
    },
  ],
};


const tableCords = [{
    ...tableData.coordinates,
    ...tableData.styles,
  type: tableData.type,
  id: tableData.id,
}];

const tableRowCellCords = tableData.tableRows.reduce((acc, cord, rowIndex) => {
    acc.tableRowCords.push({
    ...cord.coordinates,
    ...cord.styles,
  type: cord.type,
  id: cord.id,
  rowIndex,
});
const cells = cord.cells.map((cell, columnIndex) => ({
    ...cell.coordinates,
    ...cell.styles,
  type: cell.type,
  id: cell.id,
  rowIndex,
  columnIndex,
  merged: cell.merged,
  colSpan: cell.colSpan,
  rowSpan: cell.rowSpan,
}));
acc.tableCellCords = [...acc.tableCellCords, ...cells];
return acc;
}, { tableRowCords: [], tableCellCords: [] });

const tableColCords = tableData.tableCols.map((col, columnIndex) => ({
    ...col.coordinates,
    ...col.styles,
  type: col.type,
  id: col.id,
  columnIndex,
}));

const { tableRowCords, tableCellCords } = tableRowCellCords;


const Rectangle = ({
  x, y, width, height, fill, stroke,
  className, selectedItems, onClick,
  onMouseMove, id, fillOpacity,
  onMouseOut,
}) => (
  <rect
    x={x}
    y={y}
    width={width}
    height={height}
    fill={fill}
    stroke={stroke}
    className={className}
    onClick={onClick}
    onMouseMove={onMouseMove}
    onMouseOut={onMouseOut}
    fillOpacity={fillOpacity}
  />
)

const drawRectangles = (
  rectangles, customClassName, selectedItems, onClick,
  onMouseMove,
  onMouseOut,
) => rectangles
  .map((data) => {
    const {
      x, y, width, height, fill, stroke, className, id, type, merged, colSpan=1, rowSpan=1,
      columnIndex, rowIndex
    } = data;
    if (type === 'cell') {
      if (merged) {
        if (colSpan > 1 || rowSpan > 1) {
          let mergedWidth = 0;
          let mergedHeight = 0;
          for (let i = columnIndex; i < columnIndex + colSpan; i++) {
            mergedWidth += tableData.tableRows[rowIndex].cells[i].coordinates.width;
          }
          for (let i = rowIndex; i < rowIndex + rowSpan; i++) {
            mergedHeight += tableData.tableRows[i].cells[columnIndex].coordinates.height;
          }
          const nextData = {
            ...data,
            mergedHeight,
            mergedWidth,
          };
          return (
            <Rectangle
              id={id}
              x={x}
              y={y}
              width={mergedWidth}
              height={mergedHeight}
              stroke={stroke}
              fill={selectedItems.has(id) ? "blue" : "transparent"}
              className={classNames(customClassName, className)}
              onClick={e => {onClick(e, nextData);}}
              onMouseMove={e => {onMouseMove(e, nextData);}}
              onMouseOut={e => {onMouseOut(e, nextData);}}
              selectedItems={selectedItems}
              fillOpacity={selectedItems.has(id) ? .2 : 1}
            />
          );
        }
        return null;
      }
    }
    return (
      <Rectangle
        id={id}
        x={x}
        y={y}
        width={width}
        height={height}
        stroke={stroke}
        fill={selectedItems.has(id) ? "blue" : "transparent"}
        className={classNames(customClassName, className)}
        onClick={e => {onClick(e, data);}}
        onMouseMove={e => {onMouseMove(e, data);}}
        onMouseOut={e => {onMouseOut(e, data);}}
        selectedItems={selectedItems}
        fillOpacity={selectedItems.has(id) ? .2 : 1}
    />
    )
  });

const drawSplitLine = ({
   x1,
   y1,
   x2,
   y2,
 }) => (
  <line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    stroke="white"
    stroke-width=".01"
    stroke-dasharray=".2"
    strokeOpacity={1}
  />
);

const getRelativeSVGPoints = (e, svgElement) => {
  let pt = svgElement.createSVGPoint();
  pt.x = e.clientX; pt.y = e.clientY;
  const hoverCoordinates = pt.matrixTransform(svgElement.getScreenCTM().inverse());
  return hoverCoordinates;
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'view', // view | edit,
      editEntity: 'cell', // 'cell' | 'column' | 'row' | 'table'
      editAction: 'merge', // 'merge' | 'delete' | 'split'
      selectedItems: new Set([]),
      splitLineCoordinates: null,
      splitAxis: 'horizontal', // 'horizontal', 'vertical'
      drawnTable: {},
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.selectMode = this.selectMode.bind(this);
    this.selectEditEntity = this.selectEditEntity.bind(this);
    this.selectEditAction = this.selectEditAction.bind(this);
    this.selectSplitAxis = this.selectSplitAxis.bind(this);
    this.onMouseDraw = this.onMouseDraw.bind(this);
    this.createNextTable = this.createNextTable.bind(this);
  }

  handleMouseMove(e, item) {
    console.log('item ', item.id, ' hovered of type: ', item.type, ' for action: ', this.state.editAction, ' data: ', item );
    const getLineCoordinates = (item, hoverCoordinates, axis) => {
      const getLineCoordinatesByAxis = (item, hoverCoordinates, horizontalAxis) => {
        let itemWidth = item.width;
        let itemHeight = item.height;
        if (item.merged && (item.colSpan > 1 && item.rowSpan >1)) {
          itemWidth = item.mergedWidth;
          itemHeight = item.mergedHeight;
        }
        return (
          horizontalAxis ? ({
            x1: item.x,
            y1: hoverCoordinates.y,
            x2: item.x + itemWidth,
            y2: hoverCoordinates.y,
          }) : ({
            x1: hoverCoordinates.x,
            y1: item.y,
            x2: hoverCoordinates.x,
            y2: item.y + itemHeight,
          })
        );
      };
      if (item.type === 'row') {
        return getLineCoordinatesByAxis(item, hoverCoordinates, true)
      } else if (item.type === 'col') {
        return getLineCoordinatesByAxis(item, hoverCoordinates, false)
      }
      return getLineCoordinatesByAxis(item, hoverCoordinates, this.state.splitAxis === 'horizontal');
    };

    if (this.state.mode !== 'view' && this.state.editAction === 'split') {
      e.stopPropagation();
      let pt = this.svgRef.createSVGPoint();
      pt.x = e.clientX; pt.y = e.clientY;
      const hoverCoordinates = pt.matrixTransform(this.svgRef.getScreenCTM().inverse());
      this.setState({
        splitLineCoordinates: getLineCoordinates(item, hoverCoordinates),
      })
      // console.log({ l });
      // console.log('item ', item.id, ' hovered of type: ', item.type, ' for action: ', this.state.editAction, e.clientX, e.clientY)
      // const { selectedItems } = this.state;
      // this.setState({
      //   selectedItems: selectedItems.has(item.id) ?
      //     (this.state.selectedItems.delete(item.id) && this.state.selectedItems) : this.state.selectedItems.add(item.id),
      // })
    } else {
      // highlightTableData();
    }
  }

  handleClick(e, item) {
    const { mode, editAction } = this.state;
    if (mode !== 'view') {
      e.stopPropagation();
      console.log('item ', item.id, ' clicked of type: ', item.type, ' for action: ', this.state.editAction)
      if ( editAction === 'split') {

      } else {
        const { selectedItems } = this.state;
        this.setState({
          selectedItems: selectedItems.has(item.id) ?
            (this.state.selectedItems.delete(item.id) && this.state.selectedItems) : this.state.selectedItems.add(item.id),
        })
      }
    } else {
      // highlightTableData();
    }
  }

  handleMouseOut(e, item) {
    this.setState({
      splitLineCoordinates: null,
    })
  }

  selectMode(e) {
    this.setState({
      mode: e.target.value,
      selectedItems: new Set([]),
    })
  }

  selectEditEntity(e) {
    this.setState({
      editEntity: e.target.value,
      selectedItems: new Set([]),
    })
  }

  selectEditAction(e) {
    this.setState({
      editAction: e.target.value,
      selectedItems: new Set([]),
    })
  }

  selectSplitAxis(e) {
    this.setState({
      splitAxis: e.target.value,
    })
  }

  onMouseDraw(e) {
    const p = getRelativeSVGPoints(e, this.tableDrawCanvasSvg);
    console.log('mousemove p:', p);
    this.setState({
      drawnTable: {
        ...this.state.drawnTable,
        x2: p.x,
        y2: p.y,
      }
    });
  }


  createNextTable(e) {
    const getCoordinates = ({x1, y1, x2, y2}) => ({
      x: Math.min(x1, x2),
      y: Math.min(y1, y2),
      width: Math.abs(x2 - x1),
      height: Math.abs(y2 - y1),
    })
    const tableObj = {
      type: 'table',
      coordinates: getCoordinates(this.state.drawnTable),
    };
    console.log('tableObj: ', tableObj)
  }

  render() {
    const { mode, editEntity, editAction, selectedItems, splitLineCoordinates } = this.state;
    const applyHiddenClassName = (entityName) => mode === 'edit' && editEntity !== entityName ? 'noDisplay' : '';

    const tableClassNames = applyHiddenClassName('table');
    const tableRowClassNames = mode === 'view' ? 'noDisplay' : applyHiddenClassName('row');
    const tableColumnClassNames = mode === 'view' ? 'noDisplay' : applyHiddenClassName('column');
    const tableCellClassNames = applyHiddenClassName('cell');
    const showSplitAxisDropDown = (mode === 'edit')
      && (editAction === 'split' || editAction === 'split')
      && (editEntity === 'table' || editEntity === 'cell')

    const entityCoordinatesList = [
      {
        coordinates: tableCords,
        className: tableClassNames,
        type: 'table',
      },
      {
        coordinates: tableRowCords,
        type: 'row',
        className: tableRowClassNames,

      },
      {
        coordinates: tableColCords,
        type: 'col',
        className: tableColumnClassNames,
      },
      {
        coordinates: tableCellCords,
        type: 'cell',
        className: tableCellClassNames,
      },
    ];

    const tableFigure = entityCoordinatesList.map(entityCoordinates => drawRectangles(
      entityCoordinates.coordinates,
      entityCoordinates.className,
      selectedItems,
      this.handleClick,
      this.handleMouseMove,
      this.handleMouseOut,
    ));

    console.log('width: ', this.state.drawnTable.x2 - this.state.drawnTable.x1);
    console.log('height: ', this.state.drawnTable.y2 - this.state.drawnTable.y1);

    return (
      <div className="App">
        <header className="App-header">
          <div className="modesListContainer">

            <div className="modeContainer">
              <label htmlFor="modeSelect">Mode: </label>
              <select
                id="modeSelect"
                value={this.state.mode}
                onChange={ this.selectMode }
              >
                <option value="view">view</option>
                <option value="edit">edit</option>
              </select>
            </div>

            <div className="modeContainer">
              <label htmlFor="editEntitySelect">Editing entity: </label>
              <select
                id="editEntitySelect"
                value={this.state.editEntity}
                onChange={this.selectEditEntity}
              >
                <option value="cell">cell</option>
                <option value="column">column</option>
                <option value="row">row</option>
                <option value="table">table</option>
              </select>
            </div>

            <div className="modeContainer">
              <label htmlFor="editEntitySelect">Editing Action: </label>
              <select
                id="editActionSelect"
                value={this.state.editAction}
                onChange={ this.selectEditAction }
              >
                <option value="merge">Merge</option>
                <option value="delete">Delete</option>
                <option value="split">Split</option>
              </select>
            </div>

            {
              showSplitAxisDropDown &&
              <div className="modeContainer">
              <label htmlFor="splitAxisSelect">Split Axis: </label>
              <select
                id="splitAxisSelect"
                value={this.state.splitAxis}
                onChange={ this.selectSplitAxis }
              >
                <option value="horizontal">Horizontal</option>
                <option value="vertical">Vertical</option>
              </select>
            </div>
            }
          </div>
        </header>
        <div className="App-content">
          <svg ref={r => this.svgRef = r} width={tableData.coordinates.width + 10} height={tableData.coordinates.height + 10} >
            {tableFigure}
            {splitLineCoordinates && drawSplitLine(splitLineCoordinates)}
          </svg>
          <svg
            ref={r => this.tableDrawCanvasSvg = r}
            width={300}
            height={300}
            style={{ background: 'white', cursor: 'crosshair' }}
            onMouseDown={(e) => {
              const p = getRelativeSVGPoints(e, this.tableDrawCanvasSvg);
              console.log({ p });
              this.setState({
                drawnTable: {
                  x1: p.x,
                  y1: p.y,
                }
              })
              this.tableDrawCanvasSvg.addEventListener('mousemove', this.onMouseDraw)
            }}
            onMouseUp={() => {
              this.tableDrawCanvasSvg.removeEventListener('mousemove', this.onMouseDraw)
            }}
            // onMouseDown={() => {
            //   const nextTableIndex = this.state.drawnTables.count();
            //
            // }}
            // onMouseUp={}
          >
            {
              this.state.drawnTable.x1 &&
              this.state.drawnTable.x2 &&
              <rect
                x={Math.min(this.state.drawnTable.x1, this.state.drawnTable.x2)}
                y={Math.min(this.state.drawnTable.y1, this.state.drawnTable.y2)}
                width={Math.abs(this.state.drawnTable.x2 - this.state.drawnTable.x1)}
                height={Math.abs(this.state.drawnTable.y2 - this.state.drawnTable.y1)}
                fill="transparent"
                stroke="black"
                // className={className}
                // onClick={onClick}
                // onMouseMove={onMouseMove}
                // onMouseOut={onMouseOut}
                // fillOpacity={fillOpacity}
              />
            }
          </svg>
          {
            this.state.drawnTable.x1 &&
            this.state.drawnTable.x2 &&
            <button onClick={this.createNextTable}>
              Create Table
            </button>
          }
        </div>
      </div>
    );
  }
}

export default App;
