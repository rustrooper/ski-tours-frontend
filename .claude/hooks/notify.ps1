# Notification / Stop: уведомление на рабочий стол Windows
try {
  # stdin читаем байтами, чтобы не зависеть от кодировки консоли
  $ms = New-Object IO.MemoryStream
  [Console]::OpenStandardInput().CopyTo($ms)
  $data = [Text.Encoding]::UTF8.GetString($ms.ToArray()) | ConvertFrom-Json

  $project = Split-Path -Leaf $data.cwd

  if ($data.hook_event_name -eq 'Notification') {
    $title = "Claude ждёт подтверждения · $project"
    $body = $data.message
  } else {
    $title = "Claude закончил работу · $project"
    $body = $data.last_assistant_message
    if (-not $body) { $body = 'Задача выполнена' }
    if ($body.Length -gt 200) { $body = $body.Substring(0, 200) + '…' }
  }

  $null = [Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime]
  $xml = [Windows.UI.Notifications.ToastNotificationManager]::GetTemplateContent(
    [Windows.UI.Notifications.ToastTemplateType]::ToastText02)
  $texts = $xml.GetElementsByTagName('text')
  $null = $texts.Item(0).AppendChild($xml.CreateTextNode($title))
  $null = $texts.Item(1).AppendChild($xml.CreateTextNode($body))

  # AppID встроенного PowerShell — не требует регистрации своего приложения
  $appId = '{1AC14E77-02E7-4E5D-B744-2EB1AE5198B7}\WindowsPowerShell\v1.0\powershell.exe'
  [Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier($appId).Show(
    [Windows.UI.Notifications.ToastNotification]::new($xml))
} catch {
  # Уведомление не должно ломать работу Claude
}
exit 0
