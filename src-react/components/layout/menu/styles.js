const styles = {
  drawer:{
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  drawerLogo:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    flex:1,
  },
  link:{
    textDecoration:'none',
  },
  drawerMenu:{
    flex:1,
  },
  filler:{
    flex: 2,
  },
  nav:{

  },
  navItem: {
    height:'40px',
  },
  navLink: {
    padding: '8px 0',
    fontSize:'21px',
  },
  navButton:{
    cursor: 'pointer',
    border: 0,
    padding: '8px 0 8px 20px',
    textAlign:'left',
    lineHeight: '24px',
    fontSize: '20px',
    background: 'none',
    width: '100%',
    fontFamily:'Roboto',
    letterSpacing:-0.43,
    fontWeight: 300,
    color:'#888888',
  }
};

export default styles;
