package com.preparatic.preparatictests;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        WebView myBrowser = (WebView)findViewById(R.id.mybrowser);
        myBrowser.getSettings().setJavaScriptEnabled(true);
        //myBrowser.getSettings().setDefaultZoom(WebSettings.ZoomDensity.FAR);
        myBrowser.getSettings().setBuiltInZoomControls(true);
        myBrowser.loadUrl("file:///android_asset/www/index.html");
    }
}
