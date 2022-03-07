import React from 'react';
import preloader from '../../../assets/animation/spinning-loading.gif';
import style from './Preloader.module.css'

let Preloader = (props: any) => {
    return <div>
        <img className={style.small} src={preloader} />
    </div>
}

export default Preloader;