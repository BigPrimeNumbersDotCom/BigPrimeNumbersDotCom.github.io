const styles = {
  section:{
    container:{
      display:'flex',
      flexDirection:'column',
      height:'100%',
      boxSizing: 'border-box',
    },
    content:{
      flex:1,
      display:'flex',
      padding: '20px',
    },
    title: {
      height: '66px',
      padding: '20px',
    },
  },
  h2: {
    fontSize: '52px',
    lineHeight: '66px',
    letterSpacing: '-2px',
    fontWeight: 500,
    fontFamily:'Roboto',
    color:'#888888',
    margin: 0,
  },
  button: {
    maxHeight:'40px',
    border:'1px solid #979797',
    padding:'9px 9px',
    fontFamily:'Roboto',
    fontWeight:200,
    fontSize:18,
    lineHeight: '22px',
    textAlight:'center',
    color:'#888888',
    background:'none',
  },
  fixed:{
    topRight:{
      position:'fixed',
      top:33,
      right:20,
    }
  }
};

export default styles;
