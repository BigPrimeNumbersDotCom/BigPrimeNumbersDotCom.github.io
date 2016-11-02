const styles = {
  layout: {
    display:'flex',
    flexDirection:'column',
    height: '100%',
  },
  drawer: {
    width: '140px',
    position: 'fixed',
    zIndex: '100',
    height: '100%',
    boxSizing: 'border-box',
  },
  content: {
    flex: 1,
    paddingLeft: '140px',
  },
  logo: {
    width: 100,
    margin: '0 auto',
  },
  logoType:{
    fontSize:24,
    lineHeight:'26px',
    letterSpacing:-2,
    fontWeight:600,
    fontFamily:'Roboto',
    color:'#888888',
    textTransform: 'uppercase',
    margin: '-5px 0 -6px',
  },
  logoTypeAlt:{
    fontSize:24,
    lineHeight:'26px',
    letterSpacing:-2,
    fontWeight:300,
    fontFamily:'Lato',
    color:'#888888',
    textTransform: 'uppercase',
    margin:'0 -1px',
  }
};

export default styles
