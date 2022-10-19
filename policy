I. Quy trình cài đặt React Native trên Windows
- Bước 1: Cài đặt Android Studio nếu bạn chưa có trên hệ thống của mình:
  Chọn tab "Nền tảng SDK" từ bên trong Trình quản lý SDK, sau đó chọn hộp bên cạnh "Hiển thị chi tiết" ở góc dưới cùng bên phải. Tìm kiếm và mở rộng mục nhập Android 9 (Pie), sau đó đảm bảo rằng các mục sau được chọn:
  Nền tảng SDK Android 28
  Hình ảnh hệ thống Intel x86 Atom_64 hoặc API Google Hình ảnh hệ thống Intel x86 Atom
  Tiếp theo, chọn tab "Công cụ SDK" và chọn hộp bên cạnh "Hiển thị chi tiết gói" tại đây. Tìm kiếm và mở rộng mục nhập "Công cụ xây dựng SDK Android", sau đó đảm bảo rằng 28.0.3 được chọn.
  Cuối cùng, nhấp vào "Apply" để tải xuống và cài đặt Android SDK và các công cụ xây dựng liên quan.
- Bước 2: Cài đặt Chocolatey:
  Để cài đặt Chocolatley
  Người dùng phải có hệ điều hành Windows 7 hoặc mới hơn.
  .NET framework 4+.
  Bạn phải có quyền truy cập quản trị vào máy tính của mình. Tuy nhiên, họ đã đưa ra các bước để cài đặt Chocolatey cho người dùng không phải là quản trị viên.
  Nhấp chuột phải vào dấu nhắc lệnh của bạn và mở nó với tư cách quản trị viên.
  @ "% SystemRoot% \ System32 \ WindowsPowerShell \ v1.0 \ powershell.exe" -NoProfile -InputFormat Không có -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient) .DownloadString ('https: // chocolatey .org / install.ps1 ')) "&& SET" PATH =% PATH%;% ALLUSERSPROFILE% \ chocolatey \ bin "
  Sao chép lệnh trên và dán vào dấu nhắc lệnh và nhấn Enter. Sau khi cài đặt Chocolatey, hãy sao chép, dán lệnh dưới đây."choco install -y nodejs.install python2 jdk8."
- Bước 3: Cài đặt React Native
  Khởi động lại hệ thống của bạn.
  Nếu bạn đã có node, nó nên từ phiên bản 3 hoặc mới hơn.
  Nếu bạn đã có jdk, thì nó phải là phiên bản 8 trở lên.
  Việc sử dụng node quan trọng ở chỗ, bạn có thể sử dụng npm để cài đặt giao diện dòng lệnh gốc phản ứng.
  Chạy lệnh sau trong Command Prompt hoặc shell
  + npm install -g react-native-cli
  Vậy là bạn đã hoàn thành cài đặt React native
  
II. Chạy ứng dụng trong React Native
  Khởi động lại máy tính của bạn.Bạn có thể chạy ứng dụng của mình theo hai cách.
- Cách 1: Sử dụng thiết bị vật lý.
  Đảm bảo thiết bị của bạn đang ở chế độ developer. Nếu không, hãy chuyển đến Cài đặt → About phone rồi chạm vào Build number row ở dưới cùng bảy lần. Sau đó, bạn có thể quay lại Setting → Tùy chọn nhà phát triển để bật "Gỡ lỗi USB".
- Cách 2: Kết nối thiết bị của bạn với hệ thống qua USB.
  Bạn chỉ được kết nối một thiết bị tại một thời điểm. Chạy lệnh sau trong dấu nhắc lệnh để chạy ứng dụng của bạn. react-native run -android
  Chỉ chạy lệnh trên trong thư mục dự án của bạn. ví dụ: đường dẫn dự án và lệnh trên.
  Khi bạn đã cài đặt ứng dụng của mình bằng USB thì bạn có thể gỡ lỗi ứng dụng của mình bằng WiFi.
  Để gỡ lỗi ứng dụng của bạn bằng WiFi, cả thiết bị và hệ thống của bạn phải ở trong cùng một mạng WiFi.
  Mở ứng dụng của bạn trên thiết bị, bạn sẽ gặp lỗi báo màu đỏ, cứ bỏ qua nó
  Chuyển đến menu developer trong cài đặt.
  Đi tới Cài đặt dành cho nhà phát triển → Gỡ lỗi máy chủ và cổng máy chủ cho thiết bị.
  Nhập địa chỉ IP của máy và cổng của máy chủ nhà phát triển cục bộ (ví dụ: 10.0.1.1:8081).
  Chạy lệnh ipconfig trong dấu nhắc lệnh.
  Địa chỉ Ipv4 là địa chỉ ip của bạn.
  Máy chủ dành cho nhà phát triển cục bộ thường là 8081.
  Quay lại menu Nhà phát triển và chọn Tải lại JS.
  Sử dụng thiết bị ảo.
  Tạo thiết bị ảo trong studio android
  Khi thiết bị ảo được mở, hãy chạy lệnh dưới đây trong dấu nhắc lệnh.
  react-native run-android
