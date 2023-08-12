# changePro
资产查询修改版

## 1.使用说明:
- 此资产查询仅适用于QL-Emotion

- 本仓库中脚本的原始版:KingRan_KR/jd_bean_change_pro.js

- 详细说明参考 https://github.com/ccwav/QLScript2


- 本修改版查询新增点点券，话费签到积分查询，试用情况查询等 优化查询时间


- 若使用过程出现问题与本仓库无关 也与相关开发人员无关

- 在此感谢FDD开发小组的所有成员
## 2.使用方式：
### 方式一：
下载dist目录下对应系统的可执行文件直接运行(无需node环境，暂时不支持arm架构)
### 方式二：
将项目clone到要运行的机器上，运行app.js即可启动项目(需node环境)

## 注意

##### 2023/08/12
- 由于部分人网络问题，也可能枫佬服务器等原因，在查询临期京豆时请求枫佬sign接口可能会不通，可以通过修改`jd_change/change.js`中21行`let Expiring = false;`关闭临期京豆查询以提高查询速度