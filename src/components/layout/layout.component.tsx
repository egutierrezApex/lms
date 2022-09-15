import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

import { IBoard, ILayout } from '../../types/AppInterfaces';
import { addChairToLayout } from '../../redux/layout/layout.action';
import { IAppState } from '../../types/AppInterfaces';
import LayoutBoardBlock from './layout-board-block/layout-board-block';
import LayoutControls from './layout-controls/layout-controls';
import './layout.styles.scss';

const Layout = ({ board }: ILayout) => {

    //LOGIC FOR CSS GRID STYLING
    let gridTemplateColumns = '';
    const COLUMNS_LENGTH = board[0].length;

    for (let i = 0; i < COLUMNS_LENGTH; i++) {
        gridTemplateColumns += '50px '
    }

    return (
        <DndProvider backend={Backend}>
            <div className="block__layout">
                <div className="block__board">
                    <div className="board" style={{ gridTemplateColumns }}>
                        {board.map((row, rowIndex) => {
                            return row.map((_, columnIndex) => {
                                return <LayoutBoardBlock key={`${rowIndex}-${columnIndex}`} row={rowIndex} column={columnIndex} />
                            })
                        })}
                    </div>
                </div>
                <div className="block__controls">
                    <LayoutControls />
                </div>
            </div>
        </DndProvider>
    )

}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addChairToLayout: (board: Array<IBoard>) => dispatch(addChairToLayout(board))
})

const mapStateToProps = (state: IAppState) => {
    return {
        board: state.layout.board
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);