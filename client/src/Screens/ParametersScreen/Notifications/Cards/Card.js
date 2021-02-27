import React from 'react';
import Cards from './Cards';
import Switch from '@material-ui/core/Switch';
import style from './Card.module.css';

const Card = (props) => {
  return (
    <div>
      {Cards.map((item) => (
        <div style={{ display: props.show ? 'block' : 'none' }}>
          <>
            <div>
              <div className={style.title}>{item.title1}</div>
              <div className={style.subtitle}>{item.subtitle1}</div>
            </div>
            <div>
              <div className={style.paramContainer}>
                <div className={style.param}>
                  {item.notification.params.title1}
                </div>
                <Switch
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </div>
              <div className={style.paramContainer}>
                <div className={style.param}>
                  {item.notification.params.title2}
                </div>
                <Switch
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </div>
              <div className={style.paramContainer}>
                <div className={style.param}>
                  {item.notification.params.title3}
                </div>
                <Switch
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </div>
              <div className={style.paramContainer}>
                <div className={style.param}>
                  {item.notification.params.title4}
                </div>
                <Switch
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </div>
            </div>
          </>
          <>
            <div>
              <div className={style.title}>{item.title2}</div>
              <div className={style.subtitle}>{item.subtitle2}</div>
            </div>
            <div>
              <div className={style.paramContainer}>
                <div className={style.param}>
                  {item.notification.params.title1}
                </div>
                <Switch
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </div>
              <div className={style.paramContainer}>
                <div className={style.param}>
                  {item.notification.params.title2}
                </div>
                <Switch
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </div>
              <div className={style.paramContainer}>
                <div className={style.param}>
                  {item.notification.params.title3}
                </div>
                <Switch
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </div>
              <div className={style.paramContainer}>
                <div className={style.param}>
                  {item.notification.params.title4}
                </div>
                <Switch
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </div>
            </div>
          </>
        </div>
      ))}
    </div>
  );
};

export default Card;
