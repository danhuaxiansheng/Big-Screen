import { JSEncrypt } from 'jsencrypt'
import $ from 'jquery'
import './jsWebControl-1.0.0.min.js'

var slaughterNum = 17000;
var slaughterWeight = 1726326.46;
var currentSlaughterNum = 0;
var currentSlaughterWeight = 0;

$(function () {
  var now = new Date();
  var hour = now.getHours(); //得到小时数
  var minute = now.getMinutes(); //得到分钟数
  var second = now.getSeconds();
  var currentSecondOfToday = hour * 60 * 60 + minute * 60 + second;
  if (currentSlaughterNum == 0) {
    currentSlaughterNum = slaughterNum / 20 / 60 / 60 * currentSecondOfToday;
  }
  if (currentSlaughterWeight == 0) {
    currentSlaughterWeight = slaughterWeight / 20 / 60 / 60 * currentSecondOfToday;
  }

  setInterval(function () {
    currentSlaughterNum = currentSlaughterNum + slaughterNum / 20 / 60 / 60 * Math.ceil(Math.random() * 3);
    currentSlaughterWeight = currentSlaughterWeight + slaughterWeight / 20 / 60 / 60 * (Math.random() * 0.4 + 0.8);


    $("#slaughterNum").text(Math.floor(currentSlaughterNum));
    $("#slaughterWeight").text((currentSlaughterWeight / 1000).toFixed(2));
  }, 3000);


  function initPluginOptions(
    params: {
      containerId: string,
      cameraIndexCode: string,
      iServicePortStart: number,
      iServicePortEnd: number,
    }
  ) {
    let { containerId, cameraIndexCode, iServicePortStart, iServicePortEnd = 15909 } = params;
    var initCount: number = 0;
    var pubKey = '';
    const szClassId: string = "23BF3B0A-2C56-4D97-9C03-0CB103AA8F11";
    var container: any = document.getElementById(containerId);
    debugger
    var WebControl: any = WebControl || {};
    let oWebControlName = new WebControl({
      szPluginContainer: containerId,
      iServicePortStart,
      iServicePortEnd,
      szClassId,   // 用于IE10使用ActiveX的clsid
      cbConnectSuccess: function () {
        initCount = 0;
        oWebControlName.JS_StartService("window", { dllPath: "./VideoPluginConnect.dll" }).then(function () {
          oWebControlName.JS_CreateWnd(containerId, container?.clientWidth, container?.clientHeight).then(function () {
            oWebControlName.JS_RequestInterface({
              funcName: "getRSAPubKey",
              argument: JSON.stringify({ keyLength: 1024 })
            }).then(function (oData: any) {

              if (oData.responseMsg.data) {
                pubKey = oData.responseMsg.data
                oWebControlName.JS_RequestInterface({
                  funcName: "getRSAPubKey",
                  argument: JSON.stringify({
                    keyLength: 1024
                  })
                }).then(function (oData: any) {
                  if (oData.responseMsg.data) {
                    pubKey = oData.responseMsg.data;
                    ////////////////////////////////// 请自行修改以上变量值   ////////////////////////////////////
                    var encrypt = new JSEncrypt();
                    encrypt.setPublicKey(pubKey);
                    oWebControlName.JS_RequestInterface({
                      funcName: "init",
                      argument: JSON.stringify({
                        appkey: "27724360",                            //API网关提供的appkey
                        secret: encrypt.encrypt("dB0lCUoKmQcK78yrSREL"),                            //API网关提供的secret
                        ip: "221.214.243.66",                                    //API网关IP地址
                        playMode: 0,                        //初始播放模式：0-预览，1-回放
                        port: 1443,                                //综合安防管理平台端口，若启用HTTPS协议，默认443
                        snapDir: "",                          //抓图存储路径
                        videoDir: "",                        //紧急录像或录像剪辑存储路径
                        layout: "1x1",                            //布局
                        enableHTTPS: 1,                  //是否启用HTTPS协议与综合安防管理平台交互，这里总是填1
                        encryptedFields: 'secret',          //加密字段，默认加密领域为secret
                        showToolbar: 0,                  //是否显示工具栏，0-不显示，非0-显示
                        showSmart: 0,                      //是否显示智能信息（如配置移动侦测后画面上的线框），0-不显示，非0-显示
                        "reconnectDuration": 5,
                        "reconnectTimes": 5
                      })
                    }).then(function () {
                      oWebControlName.JS_Resize(container?.clientWidth, container?.clientHeight,);  // 初始化后resize一次，规避firefox下首次显示窗口后插件窗口未与DIV窗口重合问题
                      oWebControlName.JS_RequestInterface({
                        funcName: "startPreview",
                        argument: JSON.stringify({
                          cameraIndexCode: cameraIndexCode,                //监控点编号
                          streamMode: 1,                         //主子码流标识：0-主码流，1-子码流
                          transMode: 1,                           //传输协议：0-UDP，1-TCP
                          gpuMode: 0,                               //是否启用GPU硬解，0-不启用，1-启用
                          wndId: -1                                     //播放窗口序号（在2x2以上布局下可指定播放窗口）
                        })
                      });
                    });
                  }
                })
              }
            });
          });
        }, function () {

        });
      },
      cbConnectError: function () {
        oWebControlName = null;
        container?.html("插件未启动，正在尝试启动，请稍候...");
        WebControl?.JS_WakeUp("VideoWebPlugin://");
        initCount++;
        if (initCount < 3) {
          setTimeout(function () {
            initPluginOptions(params);
          }, 3000)
        } else {
          container?.html("插件启动失败，请检查插件是否安装！");
        }
      },
      cbConnectClose: function () {
        // 异常断开：bNormalClose = false
        // JS_Disconnect正常断开：bNormalClose = true
        oWebControlName = null;
      }
    });
  }

  var list = [
    {
      containerId: "playWnd13",
      cameraIndexCode: "87c94e02168c403fad0d02910badc0e2", iServicePortStart: 15851, iServicePortEnd: 15909,
    },
    {
      containerId: "playWnd12",
      cameraIndexCode: "45bbc5a8e09d49d89891f11a12975db6", iServicePortStart: 15801, iServicePortEnd: 15909,
    },
    {
      containerId: "playWnd11",
      cameraIndexCode: "e5d159a9fdb94d339eff8275063a7c62", iServicePortStart: 15801, iServicePortEnd: 15909,
    },
    {
      containerId: "playWnd10",
      cameraIndexCode: "d7f5b62af9e84f438fa800ff4e2803c8", iServicePortStart: 15801, iServicePortEnd: 15909,
    },
    {
      containerId: "playWnd9",
      cameraIndexCode: "312b91db83d148069372defb1687728c", iServicePortStart: 15801, iServicePortEnd: 15909,
    },
    {
      containerId: "playWnd8",
      cameraIndexCode: "1506a45d767a4864aa6d129b5d180470", iServicePortStart: 15751, iServicePortEnd: 15909,
    },
    {
      containerId: "playWnd7",
      cameraIndexCode: "e43e8af829f64155bcf72439abd06b62", iServicePortStart: 15751, iServicePortEnd: 15909,
    },
    {
      containerId: "playWnd6",
      cameraIndexCode: "f375217d45ec4281b96520647984221a", iServicePortStart: 15751, iServicePortEnd: 15909,
    },
    {
      containerId: "playWnd5",
      cameraIndexCode: "42c10453b1d24dd081920cec97b0d1bd", iServicePortStart: 15751, iServicePortEnd: 15909,
    },
    {
      containerId: "playWnd4",
      cameraIndexCode: "a75a533aff3b478bada2c77f076c935a", iServicePortStart: 15700, iServicePortEnd: 15909,
    },
    {
      containerId: "playWnd3",
      cameraIndexCode: "4a0d5eb679cf4e92bb45edf4a1c28022", iServicePortStart: 15700, iServicePortEnd: 15909,
    },
    {
      containerId: "playWnd2",
      cameraIndexCode: "7ce602abebe34ff8bba8d1d1b7ce8ac6", iServicePortStart: 15700, iServicePortEnd: 15909,
    },
    {
      containerId: "playWnd1",
      cameraIndexCode: "a4d22a82d5b048e09d19f7c3d098103c", iServicePortStart: 15700, iServicePortEnd: 15909,
    },
  ];

  list = list.reverse();
  list.forEach((item, index) => {
    if (index < 4) {
      initPluginOptions(item);
    } else {
      setTimeout(function () {
        initPluginOptions(item);
      }, 500);
    }
  })

});

