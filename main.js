/* 项目启动 */
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import utilities from 'utilities'

var mimetypes = (function () {
        return {
        js: 'application/x-javascript',
        css: 'text/css',
        less: 'text/css',
        jpg: 'image/jpg',
        jpeg: 'image/jpeg',
        gif: 'image/gif',
        png: 'image/png',
        bmp: 'image/bmp',
        swf: 'application/x-shockwave-flash',
        pdf: 'application/pdf',
        '7z': 'application/x-7z-compressed',
        rar: 'application/x-rar-compressed',
        zip: 'application/zip,application/x-zip-compressed',
        doc: 'application/msword',
        docx: 'application/msword',
        ppt: 'application/vnd.ms-powerpoint',
        pptx: 'application/vnd.ms-powerpoint',
        xls: 'application/vnd.ms-excel',
        xlsx: 'application/vnd.ms-excel',
        txt: 'text/plain',
        mp3: 'audio/mpeg',
        wma: 'audio/x-ms-wma',
        rm: 'application/vnd.rn-realmedia',
        rmvb: 'application/vnd.rn-realmedia',
        ra: 'audio/x-pn-realaudio',
        mid: 'audio/midi',
        wav: 'audio/x-wav',
        md: 'text/plain',
        avi: 'video/x-msvideo',
        mp4: 'video/mp4',
        m3u: 'audio/x-mpegurl',
        m4a: 'audio/mp4a-latm',
        m4b: 'audio/mp4a-latm',
        m4p: 'audio/mp4a-latm',
        m4u: 'video/vnd.mpegurl',
        m4v: 'video/x-m4v',
        '3gp': 'video/3gpp',
        ts: 'text/texmacs',
        wmv: 'video/x-ms-wmv',
        mkv: 'video/x-matroska',
        mov: 'video/quicktime'
      }
    }()),
    getMimeTypes = function (extensions) {
        extensions = extensions.split(',');
        for(var key in extensions){
          extensions.push(mimetypes[extensions[key]] || '*')
        }
        return extensions.join()
  };
Vue.filter("date", function(value,form) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  var $this=new Date(parseInt(value) * 1000);
  var o = {
    "M+" : $this.getMonth()+1, //month
    "d+" : $this.getDate(), //day
    "h+" : $this.getHours(), //hour
    "m+" : $this.getMinutes(), //minute
    "s+" : $this.getSeconds(), //second
    "q+" : Math.floor(($this.getMonth()+3)/3), //quarter
    "S" : $this.getMilliseconds() //millisecond
  }

  if(/(y+)/.test(form)) {
    form = form.replace(RegExp.$1, ($this.getFullYear()+"").substr(4 - RegExp.$1.length));
  }

  for(var k in o) {
    if(new RegExp("("+ k +")").test(form)) {
      form = form.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
    }
  }
  return form;
});
Vue.directive('clearIosShadow', {
  bind:function (el) {
    var element = el;
    //清除iOS中input阴影样式
    if (/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/i.test(navigator.userAgent)) {
      $(element).addClass('clear-ios-shadow')
    }
  }
})
Vue.directive('uploader', {
  bind:function (el,binding) {
    var element = el,opts = binding.value;
    //window.WebUploader = webuploader;
    if (!WebUploader.Uploader.support()) {
      alert('您的浏览器不支持上传功能！');
      throw new Error('WebUploader does not support the browser you are using.');
    }
    //调整file控件位置
    var resetInput = function () {
      setTimeout(function () {
        var input = $(element).find('input[type=file]').first(),
          parent = input.parent(),
          keepclick = false;

        $(element).append(input);
        //parent.remove();

        //避免频繁点击操作
        input.click(function (e) {
          if (keepclick) {
            e.stopPropagation();
            return false;
          }
          keepclick = true;
          setTimeout(function () {
            keepclick = false
          }, 1000);
        });
      });
    };
    //如果对象已存在，则添加按钮，不再重新初始化
    if (opts.WebUploader) {
      opts.WebUploader.addButton({id: element});
      resetInput();
      return;
    }
    //默认配置
    var config = {
      pick: {
        id: element,
        multiple: true,
        capture: 'camera',
        configkey: 'default_img'
      },
      accept: {
        //默认限制图片格式，可自定义格式
        extensions: 'bmp,gif,jpg,jpeg,png'
      },
      auto: true,
      disableGlobalDnd: true,
      prepareNextFile: true,
      chunked: true,
      chunkRetry: 0,
      threads: 5,
      fileNumLimit: 12,
      fileSingleSizeLimit: 10 * 1024 * 1024,
      duplicate: true,
      thumb: {
        width: 58,
        height: 58,
        // 图片质量，只有type为`image/jpeg`的时候才有效。
        quality: 80,
        // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
        allowMagnify: false,
        // 是否允许裁剪。
        crop: true,
        // 为空的话则保留原有图片格式。
        // 否则强制转换成指定的类型。
        type: 'image/jpeg'
      },
      compress: {
        width: 800,
        height: 800,
        // 图片质量，只有type为`image/jpeg`的时候才有效。
        quality: 80,
        // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
        allowMagnify: false,
        // 是否允许裁剪。
        crop: false,
        // 是否保留头部meta信息。
        preserveHeaders: true,
        // 如果发现压缩后文件大小比原来还大，则使用原来图片
        // 此属性可能会影响图片自动纠正功能
        noCompressIfLarger: false,
        // 单位字节，如果图片大小小于此值，不会采用压缩。
        compressSize: 200 * 1024
      }
    };
    //先将config中object键值提出来，以免后面的extend将其覆盖，因为该函数无法实现递归覆盖
    opts.options = opts.options || {};
    for (var key in config) {
      if (Object.hasOwnProperty(config[key]) && utilities.isObject(config[key]) && utilities.isObject(opts.options[config[key]])) {
        opts.options[key] = utilities.extend(config[key], opts.options[key])
      }
    }
    //应用配置
    config = utilities.extend(config, opts.options);

    //设置mimeTypes参数
    if (config.accept.extensions && !config.accept.mimeTypes) {
      config.accept.mimeTypes = getMimeTypes(config.accept.extensions)
    }
    //上传插件对象由 this.WebUploader 获得
    opts.WebUploader = WebUploader.create(config);
    //遍历并绑定上传事件
    $.each(opts.events, function (key, value) {
      opts.WebUploader.on(key, function () {
        var _this = this, _arguments = arguments;
        setTimeout(function () {
          value.apply(_this, _arguments)
        });
      })
    });
    //针对安卓平台的优化
    if (WebUploader.os.android) {
      opts.WebUploader.on('startUpload', function () {
        viewMask.open()
      });
      opts.WebUploader.on('uploadFinished', function () {
        viewMask.close()
      });
    }
    resetInput();
  }
});

axios.interceptors.request.use(function (config) {
  
});
axios.interceptors.response.use(function (response) {
 
});

new Vue({
  router,
  render: h => h(App),
  // components: { firstcomponent, secondcomponent }
}).$mount('#app')
