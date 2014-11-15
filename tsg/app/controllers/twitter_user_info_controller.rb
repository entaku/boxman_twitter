require 'twitter'
require "open-uri"
require "net/http"

class TwitterUserInfoController < ApplicationController
  def index
    auth = request.env["omniauth.auth"]

client = Twitter::REST::Client.new do |config|
  config.consumer_key       = '**********************'
  config.consumer_secret    = '*********************************************'
  config.oauth_token        = '***********************************************'
  config.oauth_token_secret = '**********************************************'
end

word = "update_name" # 検索したいワード

# word を含む tweet を 10 件取得する
# results = client.search(word, :count => 10, :result_type => "recent")
#
#  results.attrs[:statuses].each do |tweet|
#    puts Time.parse(tweet[:created_at])
#      puts tweet[:id]
#        puts "@" + tweet[:user][:screen_name]
#          puts tweet[:text]
#            puts
#   end


twitterac = params[:twitterac]
userinfo = client.user(twitterac)
#userinfo = client.user_search(twitterac)

    render :json => userinfo
  end

  def userimg
    userimgurl = params[:userimgurl]
    #userimgurl = "https://abs.twimg.com/sticky/default_profile_images/default_profile_1_normal.png"
    #userimg = open(userimgurl)

index1 = userimgurl.index("//")
index2 = userimgurl.length
newurl = userimgurl[index1 + 2, index2]
index3 = newurl.index("/")
index4 = newurl.length
host = newurl[0, index3]
path = newurl[index3, index4]

puts "newurl:" + newurl
puts "host:" + host
puts "path:" + path

#http = Net::HTTP.new("pbs.twimg.com")
http = Net::HTTP.new(host)
    #response = http.get("/profile_images/2579542348/l2b371d8r57tu6m4wu7i_normal.jpeg")
    response = http.get(path)
    send_data response.body

#render userimg
#send_file userimg
  end

end
