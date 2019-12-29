import React from "react";
import styles from './Layout.module.scss';


const Layout: React.FC = (props) => {
    return (
      <React.Fragment>
          <div className={styles.Menu}>
              Toolbar,SideDrawer,Backdrop
          </div>
          <main>
              {props.children}
          </main>
      </React.Fragment>
    );
};


export default Layout;
