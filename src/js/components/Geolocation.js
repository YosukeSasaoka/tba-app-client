import React from 'react';

export default class Geolocation extends React.Component {
  constructor( props ) {
    super( props );
  }
  
  componentDidMount() {
    if(navigator.geolocation)
    {
      // 現在地を取得
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // 取得したデータの整理
          var data = position.coords;
          
          // 取得したデータの整理
          var lat = data.latitude;
          var lng = data.longitude;
          var alt = data.altitude;
          var accLatlng = data.accuracy;
          var accAlt = data.altitudeAccuracy;
          var heading = data.heading;
          var speed = data.speed;
          
          // アラート表示
          alert( "あなたの現在位置は、\n[" + lat + "," + lng + "]\nです。" );
          
        },
        (error) => {
          // エラーコード(error.code)の番号
          // 0:UNKNOWN_ERROR         原因不明のエラー
          // 1:PERMISSION_DENIED     利用者が位置情報の取得を許可しなかった
          // 2:POSITION_UNAVAILABLE  電波状況などで位置情報が取得できなかった
          // 3:TIMEOUT               位置情報の取得に時間がかかり過ぎた…
          
          // エラー番号に対応したメッセージ
          var errorInfo = [
            "原因不明のエラーが発生しました…。" ,
            "位置情報の取得が許可されませんでした…。" ,
            "電波状況などで位置情報が取得できませんでした…。" ,
            "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。"
          ];
          
          // エラー番号
          var errorNo = error.code;
          
          // エラーメッセージ
          var errorMessage = "[エラー番号: " + errorNo + "]\n" + errorInfo[ errorNo ];
          
          // アラート表示
          alert( errorMessage );
        
        },
        {
		    	"enableHighAccuracy": false,
			    "timeout": 8000,
			    "maximumAge": 2000,
		    });
      
    }
    // 対応していない場合
    else
    {
      // エラーメッセージ
      var errorMessage = "お使いの端末は、GeoLacation APIに対応していません。" ;
      
      // アラート表示
      alert( errorMessage ) ;
    }
  }
  
  render() {
    return (
       <p>Geolocation Sample</p>
    );
  }
}