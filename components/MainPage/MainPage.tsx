import React, { Fragment } from 'react'
import ChapterList from '../ChapterList/ChapterList';
import Dice from '../Dice/Dice';
import LifeBar from '../LifeBar/LifeBar';
import PositionMarker from '../PositionMarker/PositionMarker';
import PlayerCharacter from '../CharacterSelection/PlayerCharacter';

interface Props {}

function MainPage(props: Props) {
    const {} = props

    return (
        <Fragment>
            <Dice/>
            <LifeBar/>
            <PositionMarker/>
            <ChapterList/>
            <PlayerCharacter/>
        </Fragment>
    )
}

export default MainPage;