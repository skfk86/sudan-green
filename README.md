# السودان الأخضر

تطبيق يحفّز الناس على زراعة الأشجار ويعلّمهم العلاقة بين الأشجار والمطر.

- **الواجهة:** ملف واحد `www/index.html` (HTML/CSS/JS) + Capacitor 6
- **الخادم:** Supabase (`ifqqlcipfyanwyspvcof`) — الجداول والنقاط والتحديات تعمل بالـ triggers داخل قاعدة البيانات
- **الخريطة:** Leaflet + OpenStreetMap + تجميع العلامات (markercluster)

## التشغيل محليًا

```bash
npm install
npx cap add android
npx cap sync android
cd android && ./gradlew assembleDebug
```

أضف هذه الأذونات في `android/app/src/main/AndroidManifest.xml` (يضيفها GitHub Actions تلقائيًا):

```xml
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
```

## البناء عبر GitHub Actions

ادفع إلى `master` ثم نزّل الـ APK من تبويب Actions → green-sudan-debug.

## إعداد Supabase المتبقي

- Authentication → Providers → Email: أوقف **Confirm email** أثناء التجربة إن أردت دخولًا فوريًا.
- التحديات الأسبوعية لها تاريخ انتهاء؛ أضف تحديات جديدة في جدول `challenges` كل أسبوع.
