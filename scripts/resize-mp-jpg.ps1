Add-Type -AssemblyName System.Drawing

function Resize-Cover {
    param(
        [string]$Src,
        [string]$Dst,
        [int]$TargetW = 1600,
        [int]$TargetH = 1000
    )

    # Load source
    $bmp = [System.Drawing.Bitmap]::FromFile($Src)
    $srcW = [int]$bmp.Width
    $srcH = [int]$bmp.Height

    $ratioSrc = [double]$srcW / [double]$srcH
    $ratioDst = [double]$TargetW / [double]$TargetH

    if ($ratioSrc -gt $ratioDst) {
        $scaleH = $TargetH
        $scaleW = [int][math]::Round($srcW * $TargetH / $srcH)
    } else {
        $scaleW = $TargetW
        $scaleH = [int][math]::Round($srcH * $TargetW / $srcW)
    }

    # Step 1: scale source to (scaleW x scaleH)
    $tmp = New-Object -TypeName System.Drawing.Bitmap -ArgumentList $scaleW, $scaleH
    $gt = [System.Drawing.Graphics]::FromImage($tmp)
    $gt.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $gt.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $gt.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $gt.DrawImage($bmp, 0, 0, $scaleW, $scaleH)
    $gt.Dispose()

    # Step 2: center-crop to TargetW x TargetH
    $cropX = [int][math]::Max(0, [int][math]::Floor(($scaleW - $TargetW) / 2))
    $cropY = [int][math]::Max(0, [int][math]::Floor(($scaleH - $TargetH) / 2))

    $dst = New-Object -TypeName System.Drawing.Bitmap -ArgumentList $TargetW, $TargetH
    $g = [System.Drawing.Graphics]::FromImage($dst)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $rect = New-Object -TypeName System.Drawing.Rectangle -ArgumentList $cropX, $cropY, $TargetW, $TargetH
    $g.DrawImage($tmp, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()

    $dst.Save($Dst, [System.Drawing.Imaging.ImageFormat]::Png)
    $dst.Dispose()
    $tmp.Dispose()
    $bmp.Dispose()

    $info = Get-Item $Dst
    Write-Host ("OK  {0}  ({1} bytes)" -f $Dst, $info.Length)
}

$base = 'C:\Users\19802\Desktop\ClaudeCodeTest\PilotLeon\public\images\projects'
Resize-Cover -Src "$base\mediapilot-03.jpg" -Dst "$base\gallery\mediapilot-05.png"
Resize-Cover -Src "$base\mediapilot-04.jpg" -Dst "$base\gallery\mediapilot-06.png"
