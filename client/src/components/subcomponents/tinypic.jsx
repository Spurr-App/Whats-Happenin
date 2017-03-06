/* eslint camelcase: 0 */

const id = Math.floor(Math.random()*1000000);

const showTinypicPlugin = () => {
  const el = document.getElementById(`tinypic_plugin_${id}`);
  el.style.display = '';
  if (el.src !== '') {
    return;
  }
  let w = 260;
  let h = 510;

  el.setAttribute('height', h);
  el.setAttribute('width', w);
  el.setAttribute('scrolling', 'no');

  const tpurl = 'http://plugin.tinypic.com/plugin/index.php?popts=l,narrow|t,images|c,url|i,en|s,false';
  el.src = tpurl;
};

function hideTinypicPlugin(){
  const el = document.getElementById('tinypic_plugin_'+id);
  el.style.display = 'none';
}


document.write(


  <iframe id="tinypic_plugin_7777" src="http://plugin.tinypic.com/plugin/index.php?popts=l,narrow|t,images|c,url|i,en|s,false" frameborder="0" style={display: none;} scrolling="no" />


</iframe><br/>);
if (tinypic_autoload) {
  showTinypicPlugin();
}

export default showTinypicPlugin;
