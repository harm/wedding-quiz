d = Dir.new('/Volumes/panasonic/PRIVATE/AVCHD/BDMV/STREAM')
d.each do |item|
  next if item == '.' or item == '..'
  # do work on real items
  count = item.split(".")[0].to_i
  if count > 115 
    %x{ /usr/local/bin/ffmpeg -i #{d.path}/#{item} -sameq -deinterlace ~/dries/#{item}.mov }
  end
end
