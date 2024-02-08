def maskify(cc)
  # num = cc.split('')
  if cc.length > 4
    "#" * (cc.length - 4) + cc[-4..-1]
  else
    cc
  end
end

puts maskify('4556364607935616') # '############5616'
puts maskify('1') # '1'
puts maskify('11111') # '#1111'
