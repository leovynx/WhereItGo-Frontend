package com.wigfe;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.provider.Telephony;
import android.telephony.SmsMessage;

public class SmsReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {

        if (Telephony.Sms.Intents.SMS_RECEIVED_ACTION.equals(intent.getAction())) {

            for (SmsMessage smsMessage :
                    Telephony.Sms.Intents.getMessagesFromIntent(intent)) {

                String body = smsMessage.getMessageBody();

                Intent launchIntent =
                        new Intent(
                                Intent.ACTION_VIEW,
                                Uri.parse(
                                        "wigfe://sms?sms_body=" + body
                                )
                        );

                launchIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

                context.startActivity(launchIntent);
            }
        }
    }
}